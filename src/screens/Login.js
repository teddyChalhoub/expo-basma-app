import React, { useContext, useEffect, useRef, useState } from 'react';
import { Text, View, TextInput, Animated } from 'react-native';
import Button from '../components/Button';
import LoginBackgroundImage from '../components/LoginBackgroundImage';
import { styles } from '../components/styles';
import { size } from '../components/Theme';
import AdminContext from '../context/admin/AdminContext';


const Login = ({ navigation, route }) => {
  const animation = useRef(new Animated.Value(0)).current
  const [password, onChangePassword] = useState("");
  const [email, onChangeEmail] = useState("");

  const { state: { session }, actions: { adminLogin } } = useContext(AdminContext);

  const reset = () => {
    onChangeEmail("");
    onChangePassword("")
  }
  const animate = (value) => {
    return Animated.timing(animation, {
      toValue: value === 1 ? 0 : 1,
      duration: 550,
      useNativeDriver: false
    })
  }

  const height = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [100, 0]
  })

  const translateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [size.height / 2, 0]
  })

  const translateUp = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -size.height / 8]
  })

  const loginBackground = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [size.height + 50, size.height / 1.8]
  })

  const opacity = animation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 0, 0]
  })

  const scale = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.8]
  })

  const marginTop = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["25%", "40%"]
  })
  return (
    <View style={styles.container}>
      {console.log({ session })}
      <LoginBackgroundImage
        opacity={opacity}
        translateUp={translateUp}
        animate={animate}
        height={loginBackground}
        scale={scale}
        marginTop={marginTop}
      />
      <Animated.View style={[styles.loginContainer, { transform: [{ translateY }] }]}>
        <Text style={styles.text}>Login</Text>
        <View>
          <TextInput
            placeholder='Email'
            style={styles.input}
            onChangeText={onChangeEmail}
            value={email}
          />
          <TextInput
            placeholder='Password'
            style={styles.input}
            onChangeText={onChangePassword}
            value={password}
            secureTextEntry={true}
          />
        </View>
        <Button onPress={() => {
          adminLogin({ email, password }, navigation)
          animate(1).start(({ finished }) => {
            reset();
          })
        }} label={"Login"} />
      </Animated.View>
    </View>
  );
}

export default Login;
