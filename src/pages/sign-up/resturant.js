import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import styles from '@/styles/signup/restaurant.module.css'

const Restaurant = () => {

  const router = useRouter()

  // Handles the submit event on form submit.
  const registerBusiness = async (event) => {
    event.preventDefault()
    const formData = {
      owner: event.target.owner.value,
      name: event.target.name.value,
      email: event.target.email.value,
      address: event.target.address.value,
      contact: event.target.contact.value,
    }
    const options = {
      headers: {
        'Content-Type': 'application/json',
      }
    }
    const response = await axios.post('http://localhost:3000/api/register/business', formData, options)
    if (response.status === 201) {
      router.push('/sign-up/success')
    }
    console.log(response.data)
  }


  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.formBox}>
          <form onSubmit={registerBusiness}>
            <h2>Register Your Business</h2>
            <input name='owner' id='owner' type="text" placeholder="Business Owner Name..." />
            <input name='name' id='name' type="text" placeholder="Business Name..." />
            <input name='email' id='email' type="text" placeholder="Business Email..." />
            <input name='address' id='address' type="text" placeholder="Business Address..." />
            <input name='contact' id='contact' type="text" placeholder="Business Number..." />
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Restaurant;