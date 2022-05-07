import React, { useState } from "react";
import {
  ImageBackground,
  View,
  StyleSheet,
  Text,
  Platform,
} from "react-native";

import defaultStyles from "../../config/styles";
import AppButton from "../AppButton";
import AppTextInput from "../AppTextInput";

function WelcomeScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <ImageBackground
      source={require("../images/background.jpg")}
      style={styles.backgroundImage}
    >
      <View style={styles.logoContainer}>
        <Text style={defaultStyles.text}>LOGO</Text>
        <Text style={styles.text}>RMS</Text>
      </View>
      <View style={styles.inputsection}>
        <AppTextInput
          style={styles.input}
          maxLength={40}
          clearButtonMode="always"
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
          placeholder="Enter your email"
          icon="email"
        />
        <AppTextInput
          style={styles.input}
          secureTextEntry
          maxLength={40}
          clearButtonMode="al ways"
          keyboardType="default"
          onChangeText={(text) => setPassword(text)}
          placeholder="Enter your password"
          icon="lock"
        />
      </View>
      <View style={styles.buttoncontainer}>
        <AppButton title="Login" />
        <AppButton title="Register" color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: "space-around",
    paddingHorizontal: 20,
  },
  buttoncontainer: {
    justifyContent: "space-between",
  },
  inputsection: {
    alignItems: "center",
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 50,
    fontWeight: "bold",
    color: defaultStyles.colors.white,
  },
  text1: {
    fontSize: 30,
  },
});

export default WelcomeScreen;
