import React, { useEffect, useRef } from 'react';
import { Animated, ImageBackground, StyleSheet, View } from 'react-native';
import { HomeImage } from '../assets/images';
import { colors, size } from './Theme';

const Loading = () => {
  const animateLoading = useRef(new Animated.Value(0)).current;

  const animate = (toValue) => {
    return Animated.timing(animateLoading, {
      toValue,
      duration: 1000,
      useNativeDriver: true
    }).start(() => {
      animate(toValue === 1 ? 0 : 1)
    })
  }

  const opacity = animateLoading.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0]
  })

  useEffect(() => {
    animate(0);
  }, [])

  return (
    <ImageBackground
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: size.width,
        height: size.height,
        backgroundColor: colors.primary
      }}
      source={HomeImage}
    >
      <View style={{
        position: "absolute",
        backgroundColor: colors.blurWhite,
        width: size.width,
        height: size.height
      }} />
      <Animated.View
        style={{
          zIndex: 1000,
          backgroundColor: colors.primary,
          width: size.width / 2,
          height: size.width / 2,
          borderRadius: size.width,
          transform: [{ scale: animateLoading }],
          opacity
        }}

      />
    </ImageBackground>
  );
}

export default Loading;