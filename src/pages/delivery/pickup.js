import Navbar from '@/components/Navbar/Navbar';
import Collections from '@/components/Delivery/Collections'
import Delivered from '@/components/Delivery/Delivered'
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

  return (
    <>
      <Navbar />
      <Collections />
      <Delivered />
    </>
  )
}

export default PickUp;