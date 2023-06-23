import { Redis } from '@upstash/redis'
import { getSession  } from "@auth0/nextjs-auth0";
import Meals from '@/models/Meal';
import { connectMongoDB } from '@/utils/mongodb'

export default async function handler(req, res) {
    const session = await getSession(req, res)
    const user = session.user
    if (user) {
        let key = `${user.sub.slice(6)}`
        const redis = new Redis({
            url: process.env.UPSTASH_REDIS_REST_URL,
            token: process.env.UPSTASH_REDIS_REST_TOKEN,
          })
        switch (req.method){
            case 'GET': {
                let cart_meals = []
                const list = await redis.get(key);
                if (list) {
                    await connectMongoDB()
                    for (let i=0; i< list.length; i++) {
                        let meal = await Meals.findOne({_id:list[i]})
                        if(meal) {
                            cart_meals.push(meal)
                        }
                    }
                    return res.status(200).json({cart_meals})
                }
                return res.status(404).json({message: 'no items found'})
            }
            default: {
                return res.status(500).json({ error: 'Invalid HTTP request' })
            }
        }
    }
}