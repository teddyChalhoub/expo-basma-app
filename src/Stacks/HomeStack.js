import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import Login from '../screens/Login';

const Stack = createNativeStackNavigator();

const HomeStack = () => {

  return (

    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName="Login"
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>

  );
}

export default HomeStack;