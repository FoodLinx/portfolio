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
  const response = await axios.get('http://localhost:3000/api/orders/getDeliveredOrders')
  if (response.status === 200){
    return response.data.deliveredOrders
  }
    
}

const PickUp = () => {
  const { data, error } = useSWR('/api/orders/getDeliveredOrders', fetcher)

  if (error) {console.log(error)}
  if (data) {
    return (
      <div>
        {data.map((order) => {
          <div>
            <div>Delivered Orders</div>
            <div>
                Commission: $35
            </div>
          </div>
        })}
      </div>
      
    );
  }
  return (
    <div> No Orders yet</div>
  )
}

export default PickUp;