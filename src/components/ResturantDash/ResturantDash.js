import React from "react";
import useSWR from 'swr'
import axios from "axios";
import styles from "./resturantDash.module.css"

const fetcher = async () => {
  const response = await axios.get('http://localhost:3000/api/resturants/getResturants')
  if (response.status === 200) {
    return response.data.resturants
  }

}

const ResturantDash = () => {
  const { data, error } = useSWR('/api/resturants/getResturants', fetcher)

  if (error) { console.log(error) }
  if (data) {
    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1>Registered Resturants</h1>
          {data.map((resturant, index) => (
            <div className={styles.details} key={index}>
              <p>Client ID: {resturant._id}</p>
              <p>Owner Name: {resturant.owner}</p>
              <p>Business Name: {resturant.name}</p>
              <p>Business Email: {resturant.email}</p>
              <p>Business Contact: {resturant.contact}</p>
              <p>Business Address: {resturant.address}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className={styles.noRestaurants}> No Registered Resturants</div>
  )

};

export default ResturantDash;
