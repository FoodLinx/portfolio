import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

/**
 * WE WILL DISPLAY ITEMS IN THE CURRENT CART.
 * SHOULD BE ABLE TO REMOVE ITEMS FROM CART.
 * MUST BE PROTECTED
 */

export default ({/*user*/}) => {

  return (
    <>
    <Navbar />
      <div>
        Your Basket is currently empty
      </div>
    </>
  )
}

export const getServerSideProps = withPageAuthRequired();