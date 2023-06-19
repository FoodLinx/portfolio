import React from 'react'
import styles from '@/styles/restaurant/order.module.css'
import Navbar from '@/components/Navbar/Navbar'

/**
 * PAGE MUST BE PROTECTED 
 * @returns THE ORDER ORDER HISTORY FOR THE RESTAURANT. 
 * ONLY A LIST OF ORDERS THAT HAVE BEEN PICKED UP BY DELIVERY/GUY
 */

const Orders = () => {
  return (
    <>
      <Navbar />
      <div>order</div>
    </>
  )
}

export default Orders