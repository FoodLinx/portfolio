import React from 'react'
import styles from '@/styles/admin/dashboard.module.css'
import Navbar from '@/components/Navbar/Navbar'

/**
 * PAGE MUST BE PROTECTED
 * @returns The dashboard for the admin
 */

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>Admin Dashboard</h2>
        </div>
      </div>
    </>
  )
}

export default Dashboard