import { models, model } from "mongoose";
import BaseSchema from './baseSchema';

const registrationsSchema = new BaseSchema({
  type: {
    type: String,
    required: true,
  },
  identifier: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
})

const Registrations = models.Registrations || model('Registrations', registrationsSchema)

export default Registrations;