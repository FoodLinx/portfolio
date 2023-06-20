import React from 'react'

const Restaurant = () => {

  

  return (
    <div>
      <div>
        <h2>Register Your Business Here</h2>
        <form onSubmit="#Function goes here">
          <input type="text" placeholder="Business Owner Name..." />
          <input type="text" placeholder="Business Name..." />
          <input type="text" placeholder="Business Email..." />
          <input type="text" placeholder="Business Address..." />
          <input type="text" placeholder="Business Number..." />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  )

}

export default Restaurant;