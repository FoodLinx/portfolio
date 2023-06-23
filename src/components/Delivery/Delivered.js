import React from 'react'
import styles from './delivered.module.css'
import useSWR from 'swr'
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
  if (response.status === 200) {
    return response.data.deliveredOrders
  }

}

const PickUp = () => {
  const { data, error } = useSWR('/api/orders/getDeliveredOrders', fetcher)

  if (error) { console.log(error) }
  if (data) {
    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {data.map((order) => {
            <div className={styles.details}>
              <h3>Delivered Orders</h3>
              <p>
                Commission: $35
              </p>
            </div>
          })}
        </div>
      </div>

    );
  }
  return (
    <div className={styles.noOrders}> No Orders yet</div>
  )
}

export default PickUp;