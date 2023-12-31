import Meal from "@/models/Meal";
import { connectMongoDB } from '@/utils/mongodb'

export default async function handler(req, res) {
  await connectMongoDB()
  
  switch (req.method) {
    case 'GET': {
      const meal = await Meal.findById(req.query.id)
      return res.status(200).json(meal)
    }
  }
}