import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { colors, size } from './Theme';

const Button = ({ label, light, width, height, ...rest }) => {
  return (
    <TouchableOpacity {...rest}
      style={{
        paddingVertical: 15,
        alignSelf: "center",
        backgroundColor: light ? colors.white : colors.primary,
        width: width ? width : size.width / 2,
        height: height ?? height,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: light ? colors.primary : colors.transparent,
        margin: 10,
      }}>
      <Text
        style={{
          marginTop: "auto",
          marginBottom: "auto",
          fontFamily: "Inter_900Black",
          textAlign: "center",
          color: light ? colors.primary : colors.white
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

export default Button;