import React from "react";
import useSWR from 'swr'
import axios from "axios";


const fetcher = async () => {
  const response = await axios.get('http://localhost:3000/api/resturants/getResturants')
  if (response.status === 200){
    return response.data.registrations
  }
    
}

const ResturantDash = () => {
  const { data, error } = useSWR('/api/resturants/getResturants', fetcher)

  if (error) {console.log(error)}
  if (data) {
    return (
      <div>
          <h1>Registered Resturants</h1>
         {data.map((resturant, index) => (
            <div key={index}>
              <div>Client ID: {resturant._id}</div>
              <div>Owner Name: {resturant.owner}</div>
              <div>Business Name: {resturant.name}</div>
              <div>Business Email: {resturant.email}</div>
              <div>Business Contact: {resturant.contact}</div>
              <div>Business Address: {resturant.address}</div>
            </div>
      ))}
      </div>
    );
  }
  return (
    <div> No Registered Resturants</div>
  )

};

export default ResturantDash;
