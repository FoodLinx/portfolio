import { getSession } from "@auth0/nextjs-auth0"
import axios from 'axios'

export default async function handler(req, res) {
  const session = await getSession(req, res)
  if (session)
  {
    const user = session.user
    if (user) {
      let options = {
      method: 'get',
      headers: {authorization: `Bearer ${process.env.AUTH0_TOKEN}`, 'content-type': 'application/json'}
      };
      const response = await axios(`https://dev-tquwkhviamycqhyx.us.auth0.com/api/v2/users/${user.sub}`, options)
      if (response) {
        return res.status(200).json({role: response.data.user_metadata.role})
      }
    }
  }
  else {
    return res.status(203).json({message: "user not logged in"})
  }
  return res.status(500).json({error:'fatal error occurred'})
}
