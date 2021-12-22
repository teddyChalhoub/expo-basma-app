import { Dimensions } from "react-native";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const colors = {
  primary: "#2F204B",
  secondary: "#492989",
  lightPrimary: "#c6aaff",
  white: "#fff",
  transparent: "transparent"
}

export const size = {
  width,
  height
}
