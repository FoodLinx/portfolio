import React from 'react'

const Driver = () => {

  return (
    <div>
      <div>
        <h2>Register as a Driver Here</h2>
        <form onSubmit="#Function goes here">
          <input type="text" placeholder="Enter Your Name..." />
          <input type="text" placeholder="Enter Your Email Address..." />
          <input type="text" placeholder="Enter YOur Mobile Number..." />
          <input type="text" placeholder="Vehicle Reg, Number..." />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  )

}

export default Driver;