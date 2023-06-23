/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import useSWR from 'swr'
import axios from "axios";
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar/Navbar';
import styles from '@/styles/user/basket.module.css'

/**
 * WE WILL DISPLAY ITEMS IN THE CURRENT CART.
 * SHOULD BE ABLE TO REMOVE ITEMS FROM CART.
 * MUST BE PROTECTED
 */

const fetcher = async () => {
  const response = await axios.get('http://localhost:3000/api/basket/')
  if (response.status === 200){
    console.log(response.data.cart_meals)
    return response.data.cart_meals
  }
}


export default () => {
  const router = useRouter()
  
const ProccedToCheckOut = () => {
  router.push('/user/checkout')
}

  const { data, error } = useSWR('/api/basket/', fetcher)

  if (error) {console.log(error)}
  if (data) {
    return (
      <>
        <Navbar />
        <div className={styles.container}>

        <div>Basket items here</div>
        { data.map((meal) => {
          <>
            <div>{meal.title}</div>
            <div>{meal.desc}</div>
          </>
        })
        }
        <div>Amount Due: Calculate Amount</div>
        <div>
            <button onClick={ProccedToCheckOut}>Make Payment</button>
          </div>
        </div>
      </>
    );
  }
}

export const getServerSideProps = withPageAuthRequired();