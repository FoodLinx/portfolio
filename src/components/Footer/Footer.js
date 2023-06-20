import React from 'react'
import Link from 'next/link'

const Footer = () => {

  return (
    <div>
      <div>
        <Link href="/sign-up/resturant">
          Register your Business here
        </Link>
      </div>
      <div>
        <Link href="/sign-up/driver">
          Register as a Driver here
        </Link>
      </div>
    </div>
  )
}

export default Footer