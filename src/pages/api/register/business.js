import { connectMongoDB } from '@/utils/mongodb'
import Resturants from '@/models/Resturants'

export default async function handler(req, res) {
    const {owner, name, email, address, contact} = req.body
   /*  if (!owner) { return res.status(403).json({validation_error: 'Missing owner info'})}
    if (!name) { return res.status(403).json({validation_error: 'Missing name info'})}
    if (!email) { return res.status(403).json({validation_error: 'Missing email info'})}
    if (!address) { return res.status(403).json({validation_error: 'Missing address info'})}
    if (!contact) { return res.status(403).json({validation_error: 'Missing contact info'})} */
    switch (req.method){
        case 'POST': {
            try {
                await connectMongoDB()
                const newRegistration = await Resturants.create({owner:owner, name:name, email:email, address:address, contact:contact})
                console.log(req.body)
                if(newRegistration) {
                    return res.status(201).json({result: 'user created'})
                }
                return res.status(200).json({result: 'done'})
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