import { Redis } from '@upstash/redis'
import { getSession } from "@auth0/nextjs-auth0";
import { connectMongoDB } from '@/utils/mongodb'
import Orders from '@/models/Orders';
import Meal from '@/models/Meal'
import NewOrderNotification from '@/models/NewOrderNotification'

export default async function handler(req, res) {
    const session = await getSession(req, res)
    const user = session.user
    if (user) {
        const {delivery_address, amount } = req.body
        let key = `${user.sub.slice(6)}`
        console.log(key)
        const redis = new Redis({
            url: process.env.UPSTASH_REDIS_REST_URL,
            token: process.env.UPSTASH_REDIS_REST_TOKEN,
          })
        switch (req.method){
            case 'POST': {
                await connectMongoDB()
                const list = await redis.get(key)
                let list_status = []
                if (list) {
                    for (let i = 0; i < list.length; i++) {
                        list_status.push({"meal_id" :list[i], "status": "not_ready"})
                    }
                    
                    const newOrder = await Orders.create({user_id:key, delivery_address:delivery_address, amount:amount, payment:true, meals:list_status , status:'Preparing'})
                    if (newOrder) {
                        for (let i=0; i < newOrder.meals.length; i++) {
                            let meal = await Meal.findOne({_id:newOrder.meals[i].meal_id})
                            await NewOrderNotification.create({order_id: newOrder._id, meal: meal._id, resturant_id: meal.resturant_id})
                        }
                    }
                    await redis.del(key)
                    return res.status(200).json({message:'Order place successfully'})
                }
                else {
                    return res.status(500).json({ message: 'Sorry there was a error processing your order, please try again'})
                }
            }
            default: {
                return res.status(500).json({ error: 'Invalid HTTP request' })
            }
        }
    }
}