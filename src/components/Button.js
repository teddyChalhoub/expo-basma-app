import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { colors, size } from './Theme';

const Button = ({ label, light, ...rest }) => {
  return (
    <TouchableOpacity {...rest}
      style={{
        paddingVertical: 15,
        alignSelf: "center",
        backgroundColor: light ? colors.white : colors.secondary,
        width: size.width / 2,
        borderRadius: 10,
        borderWidth: 1.5,
        borderColor: light ? colors.lightPrimary : colors.transparent,
        margin: 20,
      }}>
      <Text
        style={{
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