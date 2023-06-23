import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import axios from 'axios'
import useSWR from 'swr'

/**
 * WE WILL DISPLAY ORDER HISTORY FOR THE CURRENT USER
 * A LIST OF PREVIOUS ORDERS.
 * MUST BE PROTECTED
 */

const fetcher = async () => {
  const response = await axios.get('http://localhost:3000/api/orders/getOrders')
  if (response.status === 200){
    return response.data.myOrders
  }
}



export default ({/*user*/}) => {
  const { data, error } = useSWR('/api/orders/getOrders', fetcher)

  if (error) {console.log(error)}
  if (data) {
    return (
      <>
        <Navbar />
        <div className={styles.container}>

        <div>My Orders</div>
        {data.map((order) => {
          <>
            <div>{order._id}</div>
          </>
        })
        }
        </div>
      </>
    );
  }
  return(
    <div>No orders yet please buy something</div>
  )
}

export const getServerSideProps = withPageAuthRequired();