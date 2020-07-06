import * as React from "react";
import { View, StyleSheet } from "react-native";

import { Icon } from "react-native-elements";
import Button from "../../../compontents/form/Button";
import Input from "../../../compontents/form/Input";

const Login = ({ navigation }) => {
  return (
    <View>
      <Input
        screen="login"
        placeholder="email"
        icon="email"
        focus
      />

      <Input
        screen="login"
        placeholder="password"
        errorMessage="password_error"
        icon="lock"
        type='password'
      />
      <Button screen='login' title='login' onPress={() => navigation.popToTop()} />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#ffcfff",
    height: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
    alignItems: "center"
  },
  itemContainer: {
    padding: 20,
    flex: 1
  },
  title: {
    fontSize: 32
  }
});

export default Login;
