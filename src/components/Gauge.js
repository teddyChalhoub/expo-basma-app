import React, { useEffect, useRef } from 'react';
import { TextInput, StyleSheet, Animated } from 'react-native';
import Svg, { G, Circle } from 'react-native-svg';
import { colors, size } from './Theme';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedInput = Animated.createAnimatedComponent(TextInput);

const Gauge = ({ radius, percentage }) => {

  const circleRef = useRef();
  const inputRef = useRef();
  const animateCircle = useRef(new Animated.Value(0)).current;
  const strokeWidth = 15;
  const halfCircle = radius + strokeWidth;
  const circleCircumference = 2 * Math.PI * radius;

  const animate = (toValue) => {
    return Animated.timing(animateCircle, {
      toValue,
      duration: 1000,
      useNativeDriver: true
    }).start()
  }

  useEffect(() => {

    animateCircle.addListener((v) => {
      if (circleRef?.current) {
        const strokeOffset = circleCircumference - (circleCircumference * v.value) / 100;
        circleRef.current.setNativeProps({
          strokeDashoffset: strokeOffset
        });
      }

      if (inputRef?.current) {
        inputRef.current.setNativeProps({
          text: `${Math.round(v.value)}`
        })
      }
    })
    return () => {
      animateCircle.removeAllListeners();
    }
  }, [])

  useEffect(() => {
    animate(percentage)
  }, [percentage])

  return (
    <>
      <Svg
        height={radius}
        width={radius}
        viewBox={`0 0 ${halfCircle * 2}  ${halfCircle * 2}`}
      >
        <G rotation={`-90`} origin={`${halfCircle},${halfCircle}`}>
          <Circle
            cx="50%"
            cy="50%"
            stroke={colors.primary}
            r={radius}
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeOpacity={0.3}
          />
          <AnimatedCircle
            ref={circleRef}
            cx="50%"
            cy="50%"
            stroke={colors.primary}
            r={radius}
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={circleCircumference}
            strokeDashoffset={circleCircumference}
            strokeLinecap="round"
          />
        </G>
      </Svg>
      <AnimatedInput
        ref={inputRef}
        underlineColorAndroid={colors.transparent}
        editable={false}
        defaultValue='0'
        style={[StyleSheet.absoluteFill,
        { fontSize: radius / 3, color: colors.primary, fontWeight: "900", textAlign: "center" }]}
      />
    </>
  );
}

export default Gauge;