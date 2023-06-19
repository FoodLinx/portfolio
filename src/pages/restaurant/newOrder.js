import React from 'react'
import styles from '@/styles/restaurant/newOrder.module.css'
import Navbar from '@/components/Navbar/Navbar'

/**
 * PAGE MUST BE PROTECTED.
 * @returns List OF NEW ORDERS
 * SHOULD BE ABLE TO APPROVE ORDER.
 */

const newOrder = () => {
  return (
    <>
      <Navbar />
      <div>newOrder</div>
    </>
  )
}

export default newOrder