import Navbar from '@/components/Navbar/Navbar';
import React from 'react'


/**
 * THIS PAGE WILL SHOW CURRENT ORDERS READY FOR PICKUP FROM THE RESTAURANT SIDE,
 * LIST THEM IN ORDER 
 * IT WILL SHOW:
 * a) Small Picture of Food Image
 * b) Order No
 * c) Delievery Address 
 */

const PickUp = () => {
  return  (
    <>
      <Navbar />
      <div>Order PickUp Page for Delivery man</div>
    </>
  )
}

export default PickUp;