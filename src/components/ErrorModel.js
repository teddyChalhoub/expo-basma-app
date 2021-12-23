import React, { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import AdminContext from '../context/admin/AdminContext';
import Gauge from './Gauge';
import { styles } from './styles';
import { colors, size } from './Theme';
import { AntDesign } from '@expo/vector-icons';

const ErrorModel = () => {
  const
    { state: { message }, actions: { isError } }

      = useContext(AdminContext);

  return (
    <View
      style={{
        position: "absolute",
        width: size.width,
        height: size.height,
        backgroundColor: colors.blurBlack,
        zIndex: 1000
      }}
    >
      <View
        style={[
          styles.center,
          {
            backgroundColor: colors.white,
            padding: 40,
            width: size.width - 50,
            marginTop: "auto",
            marginBottom: "auto"
          }]}
      >
        <TouchableOpacity
          style={{
            position: "absolute",
            top: 0,
            right: "5%",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 10,
            zIndex: 1000
          }}
          onPress={() => isError()}
        >
          <AntDesign name={"closecircle"} size={24} color={colors.primary} />
        </TouchableOpacity>
        <Text style={[styles.text]}>{message}</Text>
      </View>
    </View>
  );
}

export default ErrorModel;