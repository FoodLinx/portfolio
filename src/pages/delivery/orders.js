import Navbar from '@/components/Navbar/Navbar';
import React from 'react'

/**
 * THIS PAGE WILL SHOW ALL THE DELIVERY HISTORY OF 
 * ORDERS MADE BY THIS SPECIFIC DELIVERY MAN.
 * MUST BE PROTECTED.
 * IT WILL DISPLAY A LIST OF ORDERS WITH:
 * a) Order No 
 * b) Delivery address 
 */

const Orders = () => {
  return (
    <>
      <Navbar />
      <div>Order history page for delivery man</div>
    </>
  )
}

export default Orders;