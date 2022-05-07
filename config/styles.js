import { Platform } from "react-native";
import colors from "./colors";

export default {
  colors,
  text: {
    fontSize: 25,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Arial",
  },
};
