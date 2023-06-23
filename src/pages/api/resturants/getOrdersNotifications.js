import { connectMongoDB } from '@/utils/mongodb'
import Meal from '@/models/Meals'
import orderNotification from '@/models/NewOrderNotification'
import getSession from "@auth0/nextjs-auth0";

export default async function handler(req, res) {
    const session = await getSession(req, res)
    const user = session.user
    if (user) {
        switch (req.method){
            case 'GET': {
                try {
                    await connectMongoDB()
                    let meals = []
                    const resturant_id = user.sub.slice(6)
                    const notifications = await orderNotification.find({resturant_id:resturant_id })
                    if (notifications){
                        for (var i = 0; i < notifications.length; i++) {
                            let meal = await meals.findOne({_id:notifications.meal_id})
                            if (meal) {
                                meals.push([notifications._id, notifications.order_id, meal])
                            }
                        }
                        return res.status(200).json(meals)
                    }
                    return res.json(404).json({mssage: 'no new notifications to process'})
                } catch(error)
                {
                    console.log(error)
                    return res.status(500).json({error: error.message})
                }
            }
            default: {
                return res.status(500).json({error: 'Invalid HTTP request'})
            }
        }
    }
}
