import { connectMongoDB } from '@/utils/mongodb'
import Drivers from '@/models/Drivers'
import Registrations from '@/models/Registrations'

export default async function handler(req, res) {
    const {name, email, contact, registration} = req.body
    switch (req.method){
        case 'POST': {
            try {
                await connectMongoDB()
                const newRegistration = await Drivers.create({name:name, email:email, contact:contact, registration:registration, status: false})
                const newNotification = await Registrations.create({type:'driver', identifier:newRegistration._id, name:name})
                if(newRegistration && newNotification) {
                    return res.status(201).json({result: 'driver created'})
                }
                return res.status(200).json({error: 'Sorry, Please try again later'})
            } catch(error) {
                console.log(error)
                return res.status(500).json({error: error.message})
            }
        }
        default: {
            return res.status(500).json({error: 'Invalid HTTP request'})
        }
    }
}