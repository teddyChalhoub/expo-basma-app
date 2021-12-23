import React, { useState } from 'react';
import AdminContext from './AdminContext';
import services from "../../apis";
import { NavigationHelpersContext } from '@react-navigation/native';
const { API } = services;


const AdminProvider = ({ children }) => {
  const [session, setSession] = useState({
    token: "",
    user: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [averageUsers, setAverageUsers] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);

  const isVisible = () => {
    setVisible(!visible)
  }

  const isLoading = () => {
    setLoading(true)
  }
  const isError = () => {
    setError(false);
  }
  const handleError = (status, message, navigate) => {
    setError(true);
    if (status === 401) {
      setMessage(message);
      navigate.replace("Login")
    } else if (status === 500) {
      setMessage("Internet Problems")
    } else {
      setMessage(message)
    }
    setLoading(false);
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
      if (err.response) {
        handleError(err.response.status, err.response.data.message, navigation)
      }
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
      if (err.response) {
        handleError(err.response.status, err.response.data.message, navigation)
      }
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
      if (err.response) {
        handleError(err.response.status, err.response.data.message, navigation)
      }
    }
  }

  const getTotalCustomers = async (navigation) => {
    try {
      const response = await API.getNumberOfCustomers(session.token);
      const result = response.data;
      if (result.success) {
        setTotalUsers(result.total_users);
        setLoading(false);
      }
    } catch (err) {
      if (err.response) {
        handleError(err.response.status, err.response.data.message, navigation)
      }
    }
  }

  const context = {
    state: { message, visible, error, totalUsers, averageUsers, session, loading },
    actions: { isLoading, adminLogin, adminLogout, isError, fetchUserAveragePerc, isVisible, getTotalCustomers }
  };


  return (
    <AdminContext.Provider value={context}>
      {children}
    </AdminContext.Provider>);
}

export default AdminProvider;