import { connectMongoDB } from '@/utils/mongodb'
import Resturants from '@/models/Resturants'

export default async function handler(req, res) {
    switch (req.method){
        case 'GET': {
            try {
                await connectMongoDB()
                const resturants = await Resturants.find({status: true})
                if (resturants){
                    return res.status(200).json({resturants})
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
