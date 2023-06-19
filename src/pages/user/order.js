import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

/**
 * WE WILL DISPLAY ORDER HISTORY FOR THE CURRENT USER
 * A LIST OF PREVIOUS ORDERS.
 * MUST BE PROTECTED
 */

export default ({/*user*/}) => {
  return (
    <>
      <Navbar />
      <div>
        User Orders History
      </div>
    </>
  )
}

export const getServerSideProps = withPageAuthRequired();