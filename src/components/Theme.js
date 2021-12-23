import { Dimensions } from "react-native";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const colors = {
  primary: "#5F160D",
  secondary: "#B33222",
  lightPrimary: "#F04732",
  primaryBlur: "rgba(95,22,13,0.3)",
  blurWhite: "rgba(255,255,255,0.5)",
  blurWhiteSecondary: "rgba(255,255,255,0.8)",
  blurBlack: "rgba(0,0,0,0.7)",
  white: "#fff",
  transparent: "transparent"
}

export const fonts = {

}

export const size = {
  width,
  height
}
