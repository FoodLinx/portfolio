import { models, model } from "mongoose";
import BaseSchema from './baseSchema';

const orderNotificationSchema = new BaseSchema({
  order_id: {
    type: String,
    required: true,
  },
  meal : {
    type: String,
    required: true
  },
  resturant_id :{
    type: String,
    required: true
  }
})

const orderNotification = models.orderNotification || model('orderNotification', orderNotificationSchema)

export default orderNotification;