import React from 'react';
import { Animated, Image, ImageBackground, View } from 'react-native';
import { AdminImage, LoginImage } from '../assets/images';
import Button from './Button';
import { styles } from './styles';
import { size } from './Theme';

const LoginBackgroundImage = ({ height, animate, opacity, translateUp, scale, marginTop }) => {
  return (
    <Animated.View
      style={{
        width: size.width,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        overflow: "hidden",
        height: height,
      }}>
      <ImageBackground
        style={{
          flex: 1,
          width: size.width,
          height: size.height,
        }}
        source={LoginImage}
      >
        <View
          style={{
            height: size.height / 2,
            width: size.width,
            marginTop: "auto",
            marginBottom: "auto"
          }}
        >
          <Animated.Image source={AdminImage} style={[styles.center, { marginTop, transform: [{ scale }] }]} />
          <Animated.View
            style={{
              height, opacity, transform: [{ translateY: translateUp }], overflow: "hidden"
            }}>
            <Button light onPress={() => animate(0).start()} label={"Login"} hidden={true} />
          </Animated.View>
        </View>
      </ImageBackground>
    </Animated.View>
  );
}

export default LoginBackgroundImage;