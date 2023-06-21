import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

const Driver = () => {

  const router = useRouter()

  // Handles the submit event on form submit.
  const registerDriver = async (event) => {
    event.preventDefault()
    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      mobile: event.target.mobile.value,
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
    <div>
      <div>
        <h2>Register as a Driver Here</h2>
        <form onSubmit={registerDriver}>
          <input name='name' type="text" placeholder="Enter Your Name..." />
          <input name='email' type="text" placeholder="Enter Your Email Address..." />
          <input name='mobile' type="text" placeholder="Enter YOur Mobile Number..." />
          <input name='registration' type="text" placeholder="Vehicle Reg, Number..." />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  )

}

export default Driver;