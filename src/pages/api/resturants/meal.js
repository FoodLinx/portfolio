import Meal from "@/models/Meal";
import { connectMongoDB } from '@/utils/mongodb'
import { getSession } from "@auth0/nextjs-auth0";

export default async function handler(req, res) {

  const session = await getSession(req, res)
  const user = session.user

  if (!user) {
    return res.status(404).send({ error: "User not found.." })
  }

  switch (req.method) {
    case 'GET': {
      try {
        await connectMongoDB()
        const meals = await Meal.findById({ resturant_id: user.sub }).limit(15)
        if (meals) {
          return res.status(200).json(meals)
        }
      } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error.message })
      }
    }
  }
}
