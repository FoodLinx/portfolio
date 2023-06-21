import { connectMongoDB } from '@/utils/mongodb'
import Drivers from '@/models/Drivers'

export default async function handler(req, res) {
    const {name, email, mobile, registration} = req.body
/*    if (!name) { return res.status(403).json({validation_error: 'Missing name info'})}
    if (!email) { return res.status(403).json({validation_error: 'Missing email info'})}
    if (!mobile) { return res.status(403).json({validation_error: 'Missing mobile info'})}
    if (!registration) { return res.status(403).json({validation_error: 'Missing registration info'})} */
    switch (req.method){
        case 'POST': {
            try {
                await connectMongoDB()
                const newRegistration = await Drivers.create({name:name, email:email, mobile:mobile, registration:registration})
                if(newRegistration) {
                    return res.status(201).json({result: 'user created'})
                }
                return res.status(200).json({error: 'Sorry, Please try again later'})
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