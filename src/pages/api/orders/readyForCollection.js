import { connectMongoDB } from '@/utils/mongodb'
import Orders from '@/models/Orders'
import NeworderNotification from '@/models/NewOrderNotification'
import getSession from "@auth0/nextjs-auth0";
import Drivers from '@/models/Drivers'

export default async function handler(req, res) {
    const session = await getSession(req, res)
    const user = session.user
    if (user) {
        switch (req.method){
            case 'POST': {
                try {
                    await connectMongoDB()
                    const order = await Orders.findOneAndUpdate({_id: req.body.order_id}, {"meals.status" : "ready"})
                    let order_complete = false
                    if (order){
                        for (i = 0; i < order.meals.length; i++){
                            if (order.meal.status === 'ready') {
                                order_complete = true
                            }
                            else {
                                order_complete = false
                                break;
                            }
                        }
                        if (order_complete === true) {
                            const driver = await Drivers.aggregate({ $sample: { size: 1 } })
                            const order = await Orders.findOneAndUpdate({_id:order_id}, {status:"ready for collection", driver:driver_id})
                            if(order) {
                                const notification = await NeworderNotification.findOneAndDelete({_id:req.body.notification_id})
                                if (notification) {
                                    console.log('deleted successfully')
                                    return res.status(200).json({message: 'order complete'})
                                }
                            }
                        }
                        return res.status(200).json({message:'meal added succesfully'})
                    }
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
