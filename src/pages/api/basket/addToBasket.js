import { Redis } from '@upstash/redis'
import { getSession } from "@auth0/nextjs-auth0";

export default async function handler(req, res) {
    const session = await getSession(req, res)
    const user = session.user
    if (user) {
        let key = `${user.sub.slice(6)}`
        const redis = new Redis({
            url: process.env.UPSTASH_REDIS_REST_URL,
            token: process.env.UPSTASH_REDIS_REST_TOKEN,
          })
        switch (req.method){
            case 'POST': {
                try {
                  const list = await redis.get(key)
                  if (list) {
                    list.push(req.body.meal_id)
                  }
                  else {
                    const item = [req.body.meal_id]
                    await redis.set(key, item);
                  }
                  return res.status(200).json({message:'added to cart'})
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
    
}