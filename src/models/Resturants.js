import { models, model } from "mongoose";
import BaseSchema from './baseSchema';

const resturantsSchema = new BaseSchema({
  owner: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  address: {
    type: String,
    required: true
  },
  contact: {
    type: String,
  },
  login: {
    type: String,
  },
})

const Resturants = models.Resturants || model('Resturants', resturantsSchema)

export default Resturants;