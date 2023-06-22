import React from "react";
import useSWR from 'swr'
import axios from "axios";


const fetcher = async () => {
  const response = await axios.get('http://localhost:3000/api/register/newRegistrations')
  if (response.status === 200){
    return response.data.registrations
  }
    
}

const createAccount = async (identifier) => {
  let options = {
    headers: {
      'Content-Type': 'application/json',
    }
  }
  const data = {identifier: identifier}
  const response = await axios.post('http://localhost:3000/api/register/createAccount', data, options)
  if(response.status === 200) {
    return
  }
  console.log(response.status)
}

const RegistrationsDash = () => {
  const { data, error } = useSWR('/api/register/newRegistrations', fetcher)

  if (error) {console.log(error)}
  if (data) {
    return (
      <div>
          <h1>New Registration Notifications</h1>
         {data.map((notification, index) => (
            <div key={index}>
              <div>Client ID: {notification.identifier}</div>
              <div>Client Name: {notification.name}</div>
              <button onClick={() => createAccount(notification.identifier)}>Approve</button>
            </div>
      ))}
      </div>
    );
  }
  return (
    <div> No notifications</div>
  )

  
};

export default RegistrationsDash;
