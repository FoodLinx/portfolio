import { connectMongoDB } from '@/utils/mongodb'
import Orders from '@/models/Orders'
import { getSession } from "@auth0/nextjs-auth0";

export default async function handler(req, res) {
    const session = await getSession(req, res)
    const user = session.user
    if (user) {
        switch (req.method){
            case 'GET': {
                try {
                    await connectMongoDB()
                    const myOrders = await Orders.find({_user_id: user.sub.slice(6)})
                    return res.status(200).json({myOrders})
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
