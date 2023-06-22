import Meal from "@/models/Meal";
import { connectMongoDB } from '@/utils/mongodb'

export default async function handler(req, res) {
  await connectMongoDB()
  
  switch (req.method) {
    case 'GET': {
      const meals = await Meal.find({}).limit(15)
      return res.status(200).json(meals)
    }

    case 'POST': {
      const meal = await Meal.create({ ...req.body })
      return res.status(201).json(meal)
    }
  }
}
