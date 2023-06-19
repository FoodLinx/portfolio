import React from 'react'
import styles from '@/styles/restaurant/orderInProgress.module.css'
import Navbar from '@/components/Navbar/Navbar'

/**
 * THIS WILL SHOW THE AMOUNT OF ORDERS IN PROGRESS.
 * @returns Orders in progress
 * PAGE MUST BE PROTECTED
 */

const ordersInProgress = () => {
  return (
    <>
      <Navbar />
      <div>ordersInProgress</div>
    </>
  )
}

export default ordersInProgress