import React from "react";
import useSWR from 'swr'
import axios from "axios";

/**
 * PAGE MUST BE PROTECTED 
 * @returns THE ORDER ORDER HISTORY FOR THE RESTAURANT. 
 * ONLY A LIST OF ORDERS THAT HAVE BEEN PICKED UP BY DELIVERY/GUY
 */

const fetcher = async () => {
  const response = await axios.get('http://localhost:3000/api/resturants/getOrdersNotifications')
  if (response.status === 200){
    return response.data.meals
  }
    
}

const ReadyForCollection = async (meal_id, order_id, notification_id) => {
  let options = {
    headers: {
      'Content-Type': 'application/json',
    }
  }
  const data = {meal_id: meal_id, order_id: order_id, notification_id:notification_id}
  const response = await axios.post('http://localhost:3000/api/orders/readyForCollection', data, options)
  if (response.status===200){
    console.log('status changed')
  }
}

const Orders = () => {
  const { data, error } = useSWR('/api/resturants/getOrdersNotifications', fetcher)

  if (error) {console.log(error)}
  if (data) {
    return (
      <div>
          <h1>Orders waiting for Preparation</h1>
         {data.map((item, index) => (
          <>
            <span>item.order_id</span>
            <div key={index}>
            <div>Meal: {item.meal.title}</div>
            <div>Image: {item.meal.image}</div>
            <button onClick={ReadyForCollection(item.meal._id, item.order_id, item._id)}>Done</button>
          </div>
          </>
      ))}
      </div>
    );
  }
  return (
    <div> No Orders waiting</div>
  )
}

export default Orders