import React, { useState } from 'react';
import AdminContext from './AdminContext';
import services from "../../apis";
const { API } = services;


const AdminProvider = ({ children }) => {
  const [session, setSession] = useState({
    token: "",
    user: ""
  });


  const adminLogin = async (value, navigation) => {
    try {
      const response = await API.login(value);
      const result = response.data;
      if (result.success) {
        setSession({
          token: result.access_token,
          user: result.user
        })
        navigation.replace("Home")
      }
    } catch (err) {
      console.log(err.message)
    }
  }

  const adminLogout = async (value, navigation) => {
    try {
      const response = await API.logout(value);
      const result = response.data;
      console.log({ result })
      if (result.success) {
        setSession({
          token: "",
          user: ""
        })
        navigation.replace("Login")
      }
    } catch (err) {
      console.log(err.message)
    }
  }


  const context = { state: { session }, actions: { adminLogin, adminLogout } };


  return (
    <AdminContext.Provider value={context}>
      {children}
    </AdminContext.Provider>);
}

export default AdminProvider;