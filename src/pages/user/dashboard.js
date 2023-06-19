import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import styles from '@/styles/user/dashboard.module.css'
import { withPageAuthRequired } from '@auth0/nextjs-auth0';


/*
THIS IS THE USER DASHBOARD PAGE.
WE WILL ONLY DISPLAY A FEW ITEMS:
a) ALL MEALS
b) Search Bar
c) Categories
SHOULD ONLY BE ACCESSIBLE TO USERS
THIS PAGE MUST BE PROTECTED
*/

export default ({/*user*/}) => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.top}>
            {/* Here I'm gonna display a search bar
            and below we display some categories with icons  . */}
            
            <div className={styles.searchBar}>Search Bar</div>
            <h3>Food and Categories</h3>
            <div className={styles.categories}>Categories</div>
          </div>
          
          <div className={styles.bottom}>
            {/* Here I'm gonna retrieve some meals */}
            <div>
              <h5>Pick something delicious!</h5>
            </div>
            
            <div>Meals</div>
            
          </div>
        
        </div>
      </div>
    </>
  )
}

export const getServerSideProps = withPageAuthRequired();
