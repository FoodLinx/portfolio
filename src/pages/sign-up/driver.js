import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import styles from '@/styles/signup/driver.module.css'

const Driver = () => {

  const router = useRouter()

  // Handles the submit event on form submit.
  const registerDriver = async (event) => {
    event.preventDefault()
    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      contact: event.target.contact.value,
      registration: event.target.registration.value,
    }
    const options = {
        headers: {
        'Content-Type': 'application/json',
      }
    }
    const response = await axios.post('http://localhost:3000/api/register/driver', formData, options)
    if (response.status === 201){
        router.push('/sign-up/success')
    }
    console.log(response.data)
  }

  return (
    <div className={styles.container}>
      <div className={styles.container}>
        <div className={styles.formBox}>
        <h2>Register As Our Driver</h2>
        <form onSubmit={registerDriver}>
          <input name='name' type="text" placeholder="Enter Your Name..." />
          <input name='email' type="text" placeholder="Enter Your Email Address..." />
          <input name='contact' type="text" placeholder="Enter YOur Mobile Number..." />
          <input name='registration' type="text" placeholder="Vehicle Reg, Number..." />
          <button type="submit">Register</button>
        </form>
        </div>
      </div>
    </div>
  )

}

export default Driver;