import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { styles } from './src/components/styles';
import Login from './src/screens/Login';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Inter_900Black
} from '@expo-google-fonts/inter';
import AdminProvider from './src/context/admin/AdminProvider';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './src/Stacks/HomeStack';

export default function App() {


  let [fontsLoaded] = useFonts({
    Inter_900Black
  });


  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

    return (

      <AdminProvider>
        <NavigationContainer>
          <HomeStack />
        </NavigationContainer>
        <StatusBar style="light" />
      </AdminProvider>
    );
  }
}


