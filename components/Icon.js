import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";
function Icon({
  name,
  size = 30,
  backgroundColor = "#fff",
  iconColor = "#000",
  ...otherProps
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons
        name={name}
        size={size * 0.5}
        color={iconColor}
        {...otherProps}
      />
    </View>
  );
}

export default Icon;
