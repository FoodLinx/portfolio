import Meal from "@/models/Meal";
import { connectMongoDB } from '@/utils/mongodb'
import getSession from "@auth0/nextjs-auth0";

export default async function handler(req, res) {
  const { title, desc, category, price, image } = req.body
  const session = await getSession()
  const user = session.user

  if (!user) {
    return res.status(404).send({ error: "User not found.." })
  }

  switch (req.method) {
    case 'GET': {
      try {
        await connectMongoDB()
        const meals = await Meal.find({}).limit(15)
        if (meals) {
          return res.status(200).json(meals)
        }
      } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error.message })
      }
    }

    case 'POST': {
      try {
        await connectMongoDB()
        const meal = await Meal.create({ title: title, desc: desc, category: category, price: price, image: image, resturant_id: user.sub })
        if (meal) {
          return res.status(201).json(meal)
        }
      } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error.message })
      }
    }

    default: {
      return res.status(500).json({ error: "Invalid HTTP request" })
    }
  }
}
