import { React, useState, useEffect } from 'react'
import styles from '@/styles/admin/dashboard.module.css'
import Navbar from '@/components/Navbar/Navbar'
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import ResturantDash from '@/components/ResturantDash/ResturantDash'
import DriverDash from '@/components/DriverDash/DriverDash';
import { useRouter } from 'next/router';
import axios from 'axios';
import RegistrationsDash from '@/components/RegistrationsDash/RegistrationsDash';

/**
 * PAGE MUST BE PROTECTED
 * @returns The dashboard for the admin
 */


export default () => {

  const router = useRouter()
  const [role, setRole] = useState('')
  
    useEffect(() => {
      async function run() {
        let options = {
          method: 'GET',
          headers: {
            'content-type': 'application/json'
          }
        }
        const response = await axios.get('http://localhost:3000/api/profiles/getRole', options)
        if (response.status === 200) {
          setRole(response.data.role)
          if (response.data.role !== 'admin') {
            router.push('/')
          }
        }
        else {
          router.push('/')
        }
      }
      run()
    })
    
      if (role === 'admin'){
        return (
          <>
            <Navbar />
            <div className={styles.container}>
              <div className={styles.title}>
                <h2>Admin Dashboard</h2>
                <RegistrationsDash/>
                <ResturantDash/>
                <DriverDash/>
              </div>
            </div>
          </>
        )
      }
}

export const getServerSideProps = withPageAuthRequired();