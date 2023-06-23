import React from 'react'


/**
 * THIS PAGE WILL SHOW CURRENT ORDERS READY FOR PICKUP FROM THE RESTAURANT SIDE,
 * LIST THEM IN ORDER 
 * IT WILL SHOW:
 * a) Small Picture of Food Image
 * b) Order No
 * c) Delievery Address 
 */

const fetcher = async () => {
  const response = await axios.get('http://localhost:3000/api/drivers/collectOrders')
  if (response.status === 200){
    return response.data.orders_for_collection
  }
    
}

const updateStatusToDelivered = async (order_id) => {
    let options = {
        headers: {
          'Content-Type': 'application/json',
        }
      }
    const data = {order_id: order_id}
    const response = await axios.post('http://localhost:3000/api/orders/setDeliveryStatus', data, options)
    if (response.status===200){
        console.log('delivered')
        
  }
}

const collect = async (order_id) => {
  let options = {
    headers: {
      'Content-Type': 'application/json',
    }
  }
  const data = {order_id: order_id}
  const response = await axios.post('http://localhost:3000/api/drivers/collectOrders', data, options)
  if (response.status===200){
    console.log('out on delivery')
    setTimeout(updateStatusToDelivered(response.data.order._id), 20);

  }
}

const PickUp = () => {
  const { data, error } = useSWR('/api/drivers/collectOrders', fetcher)

  if (error) {console.log(error)}
  if (data) {
    return (
      <div>
        {data.map((order) => {
          <div>
            <div>order data</div>
          <button onClick={collect(order._id)}>collect</button>
          </div>
        })}
      </div>
      
    );
  }
  return (
    <div> No Orders waiting</div>
  )
}

export default PickUp;