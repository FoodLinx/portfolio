import React from "react";
import useSWR from 'swr'
import axios from "axios";

const fetcher = async () => {
  const response = await axios.get('http://localhost:3000/api/drivers/getDrivers')
  if (response.status === 200){
    return response.data.registrations
  }
    
}

const DriverDash = () => {
  const { data, error } = useSWR('/api/drivers/getDrivers', fetcher)

  if (error) {console.log(error)}
  if (data) {
    return (
      <div>
          <h1>Registered Drivers</h1>
         {data.map((driver, index) => (
            <div key={index}>
              <div>Client ID: {driver._id}</div>
              <div>Driver Name: {driver.name}</div>
              <div>Driver Contact: {driver.contact}</div>
              <div>Driver Address: {driver.registration}</div>
            </div>
      ))}
      </div>
    );
  }
  return (
    <div> No Registered Drivers</div>
  )
};

export default DriverDash;