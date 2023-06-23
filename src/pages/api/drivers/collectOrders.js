import { connectMongoDB } from '@/utils/mongodb'
import Orders from '@/models/Orders'
import getSession from "@auth0/nextjs-auth0";
import orderNotification from '@/models/NewOrderNotification';

export default async function handler(req, res) {
    const session = await getSession(req, res)
    const user = session.user
    if (user) {
        switch (req.method){
            case 'GET': {
                try {
                    await connectMongoDB()
                    const orders_for_collection = await Orders.find({driver: user.sub, status: "ready for collection"})
                    return res.status(200).json(orders_for_collection)
                } catch(error)
                {
                    console.log(error)
                    return res.status(500).json({error: error.message})
                }
            }
            case 'POST': {
                try {
                    await connectMongoDB()
                    const order = await Orders.findOneAndUpdate({_id:req.body.order_id}, {status:"out on delivery"})
                    return res.status(200).json(order)
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
