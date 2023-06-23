import { connectMongoDB } from '@/utils/mongodb'
import Orders from '@/models/Orders'
import getSession from "@auth0/nextjs-auth0";

export default async function handler(req, res) {
    const session = await getSession(req, res)
    const user = session.user
    if (user) {
        switch (req.method){
            case 'POST': {
                try {
                    await connectMongoDB()
                    const order = await Orders.findOneAndUpdate({_id:req.body.order_id}, {status:"delivered"})
                    return res.status(200).json({message:'delivered'})
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
