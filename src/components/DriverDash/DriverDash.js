import React from "react";
import useSWR from 'swr'
import axios from "axios";
import styles from './driverDash.module.css'

const fetcher = async () => {
  const response = await axios.get('http://localhost:3000/api/drivers/getDrivers')
  if (response.status === 200){
    return response.data.drivers
  }
    
}

const DriverDash = () => {
  const { data, error } = useSWR('/api/drivers/getDrivers', fetcher)

  if (error) {console.log(error)}
  if (data) {
    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1>Registered Drivers</h1>
         {data.map((driver, index) => (
            <div className={styles.details} key={index}>
              <p>Client ID: {driver._id}</p>
              <p>Driver Name: {driver.name}</p>
              <p>Driver Contact: {driver.contact}</p>
              <p>Driver Address: {driver.registration}</p>
            </div>
         ))}
        </div>
      </div>
    );
  }
  return (
    <div className={styles.noDrivers}> No Registered Drivers</div>
  )
};

export default DriverDash;