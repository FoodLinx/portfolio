import { models, model } from "mongoose";
import BaseSchema from './baseSchema';

const driversSchema = new BaseSchema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  mobile: {
    type: String,
    required: true
  },
  registration: {
    required: true,
    type: String,
  },
  login: {
    type: String,
  },
})

const Drivers = models.Drivers || model('Drivers', driversSchema)

export default Drivers;