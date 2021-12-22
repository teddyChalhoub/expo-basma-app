import React, { useContext } from 'react';
import Button from '../components/Button';
import AdminContext from '../context/admin/AdminContext';

const HomeScreen = ({ navigation, route }) => {

  const { state: { session }, actions: { adminLogout } } = useContext(AdminContext);
  const { token } = session;

  return (<Button onPress={() => adminLogout(token, navigation)} label={"logout"} />);
}

export default HomeScreen;