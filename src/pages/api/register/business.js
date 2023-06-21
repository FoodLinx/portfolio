import { connectMongoDB } from '@/utils/mongodb'
import Resturants from '@/models/Resturants'
import Registrations from '@/models/Registrations'

export default async function handler(req, res) {
    const {owner, name, email, address, contact} = req.body
    switch (req.method){
        case 'POST': {
            try {
                await connectMongoDB()
                const newRegistration = await Resturants.create({owner:owner, name:name, email:email, address:address, contact:contact})
                const newNotification = await Registrations.create({type:'buisness', identifier:newRegistration._id, name:name})
                if(newRegistration && newNotification) {
                    return res.status(201).json({result: 'Business registration notification created'})
                }
                return res.status(200).json({error: 'Sorry, Please try again later'})
            } catch(error)
            {
                console.log(error)
                return res.status(500).json({error: error.message})
            }
        }
        default: {
            return res.status(500).json({ error: 'Invalid HTTP request' })
        }
    }
}