import React, { useEffect, useState } from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0/client'


const Navbar = () => {
  const { user } = useUser()
  const [isSubscriber, setIsSubscriber] = useState(false)

  useEffect( () => {

    const axios = require("axios").default;

    const options = {
        method: 'GET',
        url: 'https://dev-tquwkhviamycqhyx.us.auth0.com/api/v2/users',
        params: { q: 'email:"some-example@email.com"'},
        headers: {authorization: `Bearer ${process.env.AUTH0_TOKEN}`, 'content-type': 'application/json'}
    };
    // in my case I needed the app_metadata which held the users subscription status. But you can access anything you need similar to this
      axios.request(options).then(function (response) {
          /* if(response.data[0]['app_metadata']['subscription_status'] === true){
              setIsSubscriber(true);
          } */
          console.log(response.data)
      }).catch(function (error) {
          console.error(error);
      });
    }, [])


  
  return (
    <>  
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <div className={styles.logo}>
              <Link href="/">FoodLinx</Link>
            </div>
          </div>
          <div className={styles.right}>
            {/*common links are visible only to signed out users */}
            { !user && (
              <>
              <div className={styles.link}>
                <Link href="/menus">Menus</Link>
              </div>
              <div className={styles.link}>
                <Link href="/about">About</Link>
              </div>
              <div className={styles.link}>
                <Link href="/contact">Contact</Link>
              </div>
              </>
            )}
            

            {/* if the logged in user is a user then show following links */}
            {
              user && /*user.user_metadata.role == "user" &&*/ (
                <>
                <div className={styles.link}>
                  <Link href="#">Basket</Link>
                </div>
                <div className={styles.link}>
                  <Link href="#">Orders</Link>
                </div>
                </>
              )
            }
            

            {/* if the logged in user is a resturant owner then show following links */}
            { user && /*user.user_metadata.role == "resturant" &&*/ (
              <>
              <div className={styles.link}>
                <Link href="#">
                  Incoming Orders
                </Link>
              </div>
              <div className={styles.link}>
                <Link href="#">
                  Orders In Progress
                </Link>
              </div>
              <div className={styles.link}>
                <Link href="#">
                  Orders Ready For Pickup
                </Link>
              </div>
              <div className={styles.link}>
                <Link href="#">
                  Order History
                </Link>
              </div>
              </>
            )}
            

            {/* Delivery links */}

            {
              user && /*user.user_metadata.role == "driver" &&*/ (
                <>
                <div className={styles.link}>
                  <Link href="#">
                  Orders Ready For Pickup
                  </Link>
                </div>
                <div className={styles.link}>
                  <Link href="#">
                  Pickup History
                  </Link>
                </div>
                </>
            )}

             {/* System administrator */}

             {
              user && /*user.user_metadata.role == "admin" &&*/ (
                <>
                <div className={styles.link}>
                  <Link href="#">
                  Manage resturants
                  </Link>
                </div>
                <div className={styles.link}>
                  <Link href="#">
                  Manage Drivers
                  </Link>
                </div>
                </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
