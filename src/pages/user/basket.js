import React from 'react'
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import useSWR from 'swr'
import axios from "axios";

/**
 * WE WILL DISPLAY ITEMS IN THE CURRENT CART.
 * SHOULD BE ABLE TO REMOVE ITEMS FROM CART.
 * MUST BE PROTECTED
 */

const fetcher = async () => {
  const response = await axios.get('http://localhost:3000/api/basket/index')
  if (response.status === 200){
    return response.data.cart_meals
  }
    
}



export default ({user}) => {

  const { data, error } = useSWR('/api/basket/index', fetcher)

  if (error) {console.log(error)}
  if (data) {
    return (
      <>
        <div>Basket items here</div>
        { data.map((item, index) => {
          <>
            <div>{item.title}</div>
            <div>{item.desc}</div>
          </>
        })
        }
        <div>Amount Due: $</div>
        <div>
            <Button>Procced to checkout</Button>
        </div>
      </>
    );
  }
}

export const getServerSideProps = withPageAuthRequired();