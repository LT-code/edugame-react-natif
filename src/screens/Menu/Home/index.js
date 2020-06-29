import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet } from "react-native";

import Login from "../../auth/Login";
import ChooseType from "../../auth/ChooseType";

import { Text } from "react-native";
import { DrawerActions } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

const Home =  ({ navigation }) => {
  return (
    <Text>Home</Text>
  );
};

const styles = StyleSheet.create({
  leftIcon: {
    padding: 10
  }
});

export default Home;
