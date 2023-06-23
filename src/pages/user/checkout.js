import React from 'react'
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import useSWR from 'swr'
import axios from "axios";
import { useRouter } from 'next/router';


const makePayment = async () => {
    const router = useRouter()
  const response = await axios.post('http://localhost:3000/api/checkout/index')
  if (response.status === 200){
    return router.push('/')
  }   
}

export default ({user}) => {

    return (
      <>
        <div>Make Order Payment</div>
        <div>Amount Due: $100.00</div>
        <div>
            <Button onclick={makePayment}>Pay</Button>
        </div>
      </>
    );
  }

export const getServerSideProps = withPageAuthRequired();