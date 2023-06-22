import { connectMongoDB } from '@/utils/mongodb'
import Drivers from '@/models/Drivers'

export default async function handler(req, res) {
    switch (req.method){
        case 'GET': {
            try {
                await connectMongoDB()
                const drivers = await Drivers.find({status: true})
                if (drivers){
                    return res.status(200).json({drivers})
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
