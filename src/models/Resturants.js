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
  status : {
    type: Boolean,
    required: true
  }
})

const Resturants = models.Resturants || model('Resturants', resturantsSchema)

export default Resturants;