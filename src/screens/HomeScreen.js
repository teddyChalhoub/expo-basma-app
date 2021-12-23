import React, { useContext, useEffect, useRef } from 'react';
import { Animated, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Svg, { Circle, G } from 'react-native-svg';
import { HomeImage, LoginImage } from '../assets/images';
import Button from '../components/Button';
import ChooseTimeButton from '../components/ChooseTimeButton';
import Gauge from '../components/Gauge';
import Loading from '../components/Loading';
import { styles } from '../components/styles';
import { colors, size } from '../components/Theme';
import AdminContext from '../context/admin/AdminContext';
import { AntDesign } from '@expo/vector-icons';
import Model from '../components/Model';

const HomeScreen = ({ navigation, route }) => {

  const
    { state: { loading, averageUsers, totalUsers, visible },
      actions: { adminLogout, isLoading, isVisible, getTotalCustomers } }

      = useContext(AdminContext);

  useEffect(() => {
    getTotalCustomers();
  }, [])

  return (
    <>
      {loading ? <Loading /> :
        <ImageBackground
          style={{
            flex: 1,
            justifyContent: "center",
            width: size.width,
            height: size.height,
            backgroundColor: colors.primary
          }}
          source={HomeImage}
        >
          <TouchableOpacity
            style={{
              position: "absolute",
              top: 0,
              right: "5%",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: 30,
              zIndex: 1000
            }} onPress={() => adminLogout(navigation)}
          >
            <Text style={[styles.text, [{ fontSize: 15, margin: 10 }]]}>Logout</Text>
            <AntDesign name="logout" size={24} color={colors.primary} />
          </TouchableOpacity>
          {console.log(averageUsers)}
          {console.log(totalUsers)}

          <View style={{
            position: "absolute",
            backgroundColor: colors.blurWhite,
            width: size.width,
            height: size.height
          }} />
          <Text style={styles.text}>Total Customers</Text>
          <Text style={styles.text}>{totalUsers}</Text>
          <ChooseTimeButton navigation={navigation} />
          <Model />
        </ImageBackground>
      }
    </>
  );
}

export default HomeScreen;