import React from 'react';
import { Animated, Image, ImageBackground, View } from 'react-native';
import { AdminImage, LoginImage } from '../assets/images';
import Button from './Button';
import { styles } from './styles';
import { colors, size } from './Theme';

const LoginBackgroundImage = ({ backgroundColor, height, animate, opacity, translateUp, scale, marginTop, color }) => {
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
        <Animated.View
          style={[{
            height: size.height / 2.3,
            width: size.width - 50,
            marginTop: "auto",
            marginBottom: "auto",
            backgroundColor: backgroundColor ? backgroundColor : colors.transparent,
            borderRadius: 10
          }, styles.center]}>
          <Animated.Text style={[
            styles.center,
            {
              fontSize: 50,
              color,
              fontFamily: "Inter_900Black",
              marginTop,
              transform: [{ scale }]
            }]}
          >
            BASMA
          </Animated.Text>
          <Animated.View
            style={{
              height, opacity, transform: [{ translateY: translateUp }], overflow: "hidden"
            }}>
            <Button light onPress={() => animate(0).start()} label={"Login"} hidden={true} />
          </Animated.View>
        </Animated.View>
      </ImageBackground>
    </Animated.View >
  );
}

export default LoginBackgroundImage;