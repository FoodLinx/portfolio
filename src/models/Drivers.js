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
  contact: {
    type: String,
    required: true
  },
  registration: {
    required: true,
    type: String,
  },
  status: {
    type: Boolean,
    required: true
  },
})

const Drivers = models.Drivers || model('Drivers', driversSchema)

export default Drivers;