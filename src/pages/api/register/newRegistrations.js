import { connectMongoDB } from '@/utils/mongodb'
import Registrations from '@/models/Registrations'

export default async function handler(req, res) {
    const {} = req.body
    switch (req.method){
        case 'GET': {
            try {
                await connectMongoDB()
                const registrations = await Registrations.find({})
                if (registrations){
                    return res.status(200).json({registrations})
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
