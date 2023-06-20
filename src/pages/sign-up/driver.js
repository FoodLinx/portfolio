import React from 'react'
import styles from '@/styles/signup/driver.module.css'

const Driver = () => {

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.formBox}>
          <h2 className={styles.title}>Register as a Driver Here</h2>
          <form onSubmit="#Function goes here">
            <input type="text" placeholder="Enter Your Name..." />
            <input type="text" placeholder="Enter Your Email Address..." />
            <input type="text" placeholder="Enter YOur Mobile Number..." />
            <input type="text" placeholder="Vehicle Reg, Number..." />
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  )

}

export default Driver;