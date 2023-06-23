import React from 'react'
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import axios from "axios";
import { useRouter } from 'next/router';

export default () => {

  const router = useRouter()

  const makePayment = async () => {
    const response = await axios.post('http://localhost:3000/api/checkout/', {
      delivery_address: '123 fake address Town Country', amount: 123.00
    })
    if (response.status === 200){
      router.push('/')
    }
  }

    return (
      <>
        <div>Make Order Payment</div>
        <div>Amount Due: $100.00</div>
        <div>
            <button onClick={makePayment}>Pay</button>
        </div>
      </>
    );
  }

export const getServerSideProps = withPageAuthRequired();