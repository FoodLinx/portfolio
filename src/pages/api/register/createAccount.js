import { connectMongoDB } from '@/utils/mongodb'
import Registrations from '@/models/Registrations'
import axios from 'axios'
import Resturants from '@/models/Resturants';
import Drivers from '@/models/Drivers';

const generatePassword = () => {
 var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 var passwordLength = 12;
 var password = "";

 for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
   }
   return password
}

const sendEmailPassword = async (name, password) => {
    console.log(`Sending email to ${name} with password ${password}`)
}

export default async function handler(req, res) {
    switch (req.method){
        case 'POST': {
            try {
                await connectMongoDB()
                const registration = await Registrations.findOne({identifier:req.body.identifier})
                if (registration) {
                    let mongo_data = undefined
                    let role = undefined
                    if (registration.type === 'business'){  
                        mongo_data = await Resturants.findOne({_id:registration.identifier})
                        role = "resturant"
                    }
                    else {
                        mongo_data = await Drivers.findOne({_id:registration.identifier})
                        role = "driver"
                    }
                    if (mongo_data){
                        let options = {
                            method: 'POST',
                            headers: {authorization: `Bearer ${process.env.AUTH0_TOKEN}`, 'content-type': 'application/json'}
                        }
                        const password = generatePassword()
                        const email = mongo_data.email
                        const contact = mongo_data.contact
                        const name = mongo_data.name
                        const user_id = mongo_data._id
                        const account_data = {
                            "email": email,
                            "user_metadata": {role: role},
                            "blocked": false,
                            "email_verified": true,
                            "app_metadata": {},
                            "given_name": "None",
                            "family_name": "None",
                            "name": name,
                            "nickname": "None",
                            "picture": "https://secure.gravatar.com/avatar/15626c5e0c749cb912f9d1ad48dba440?s=480&r=pg&d=https%3A%2F%2Fssl.gstatic.com%2Fs2%2Fprofiles%2Fimages%2Fsilhouette80.png",
                            "user_id": user_id,
                            "connection": "Username-Password-Authentication",
                            "password": password,
                            "verify_email": false,
                        }
                        await Registrations.findOneAndDelete({identifier:req.body.identifier})
                        const response = await axios.post('https://dev-tquwkhviamycqhyx.us.auth0.com/api/v2/users', account_data, options)
                       if (response.status === 201) {
                            sendEmailPassword(name, password)
                            await Registrations.findOneAndDelete({identifier:req.body.identifier})
                            if (registration.type === 'business') {
                                await Resturants.findOneAndUpdate({_id:req.body.identifier}, {status:true})
                            }
                            else {
                                await Drivers.findOneAndUpdate({_id:req.body.identifier}, {status:true})
                            }
                            return res.status(200).json({result: ' {Account has been successfully created!'})
                        }
                        return res.status(500).json({error: "an error occurred, server admin notified"})
                    }
                }

            } catch(error){
                console.log(error)
                return res.status(500).json({error: error.message})
            }
        }
        default: {
            return res.status(500).json({error: 'Invalid HTTP request'})
        }
    }
}
