import * as React from "react";
import { View, StyleSheet } from "react-native";

import { Button } from 'react-native-elements';

const Login = ({ navigation }) => {
  return (
      <Button
          title="Back to home"
          onPress={() => navigation.popToTop()}
        />
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

