import { models, model } from "mongoose"
import BaseSchema from './baseSchema';

const MealSchema = new BaseSchema({
  title: {
    type: String,
    required: true,
    min: 5
  },
  desc: {
    type: String,
    required: true,
    min: 10
  },
  category: {
    type: String,
    enum: ['pizza', 'burger', 'seafood', 'chicken', 'steak', 'vegan'],
    required: true,
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  resturant_id: {
    type: String,
    required: true
  }
})

const Meal = models.Meal || model('Meal', MealSchema)

export default Meal;