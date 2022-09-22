import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Set up the inital context
// modelnameContext
export const UserContext = React.createContext();

// create exportable consumer to have access to items in the provider 
// modelnameConsumer
export const UserConsumer = UserContext.Consumer; 

// create provider, store any function, state, variable that we want global 
// modelnameProvider 
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ username: 'Fooman', date_joined: '12-2-17', membership: 'Silver' })


  // useEffect(() => {
  //   axios.get(`/api/users/${id}`)
  //     .then( res => setUser(res.data))
  //     .catch(err => console.log(err))
  // })

  return (
    <UserContext.Provider value={{
      user, 
      setUser, 
    }}>
      { children }
    </UserContext.Provider>
  )
}

export default UserProvider