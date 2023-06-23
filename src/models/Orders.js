import { models, model } from "mongoose";
import BaseSchema from './baseSchema';

const ordersSchema = new BaseSchema({
  user_id: {
    type: String,
    required: true,
  },
  delivery_address: {
    type: String,
    required: true
  },
  amount: {
    required: true,
    type: Number,
  },
  meals : {
    type: Array,
    required: true
  },
  payment: {
    type: Boolean,
    required: true,
  },
  status: {
    type: String,
    required: true
  }, 
  driver : {
    type: String,
    required: false
  }
})

const Orders = models.Orders || model('Orders', ordersSchema)

export default Orders;