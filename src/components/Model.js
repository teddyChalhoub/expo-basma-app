import React, { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import AdminContext from '../context/admin/AdminContext';
import Gauge from './Gauge';
import { styles } from './styles';
import { colors, size } from './Theme';
import { AntDesign } from '@expo/vector-icons';

const Model = () => {
  const
    { state: { visible, averageUsers }, actions: { isVisible } }

      = useContext(AdminContext);
  if (!visible) {
    return null;
  } else {
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
            onPress={() => isVisible()}
          >
            <AntDesign name={"closecircle"} size={24} color={colors.primary} />
          </TouchableOpacity>
          <Text
            style={{
              textAlign: "center",
              fontSize: 25,
              color: colors.primary,
              fontFamily: "Inter_900Black",
              margin: 16
            }}
          >
            Total customers
          </Text>

          <View style={[styles.center]}>
            <Gauge radius={size.width / 2} percentage={averageUsers} />
          </View>
        </View>
      </View>
    );
  }

}

export default Model;