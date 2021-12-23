import React, { useState } from 'react';
import AdminContext from './AdminContext';
import services from "../../apis";
const { API } = services;


const AdminProvider = ({ children }) => {
  const [session, setSession] = useState({
    token: "",
    user: ""
  });
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [averageUsers, setAverageUsers] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);

  const isVisible = () => {
    setVisible(!visible)
  }

  const isLoading = () => {
    setLoading(true)
  }

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
        // setLoading(false);
      }
    } catch (err) {
      console.log(err.message)
      setLoading(false);
    }
  }

  const adminLogout = async (navigation) => {
    try {
      const response = await API.logout(session.token);
      const result = response.data;
      if (result.success) {
        setSession({
          token: "",
          user: ""
        })
        navigation.replace("Login")
        setLoading(false);
      }
    } catch (err) {
      console.log(err.message)
      setLoading(false);
    }
  }

  const fetchUserAveragePerc = async (value, navigation) => {
    try {
      const response = await API.fetchUserAverage(value, session.token);
      const result = response.data;
      if (result.success) {
        setAverageUsers(result.average_registered);
        setLoading(false);
        setVisible(true);
      }
    } catch (err) {
      console.log(err.message)
      setLoading(false);
    }
  }

  const getTotalCustomers = async () => {
    try {
      const response = await API.getNumberOfCustomers(session.token);
      const result = response.data;
      console.log({ result })
      if (result.success) {
        setTotalUsers(result.total_users);
        setLoading(false);
      }
    } catch (err) {
      console.log(err.message)
      setLoading(false);
    }
  }

  const context = {
    state: { visible, totalUsers, averageUsers, session, loading },
    actions: { isLoading, adminLogin, adminLogout, fetchUserAveragePerc, isVisible, getTotalCustomers }
  };


  return (
    <AdminContext.Provider value={context}>
      {children}
    </AdminContext.Provider>);
}

export default AdminProvider;