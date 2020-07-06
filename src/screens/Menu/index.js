import React, { useLayoutEffect, useState, useEffect } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, Dimensions, StyleSheet } from "react-native";

import Strings from "../../contants/Strings/";

import Home from "./Home/";
import Path from "./Path/";
import Library from "./Library/";
import Messages from "./Messages/";
import Stats from "./Stats/";
import Rewards from "./Rewards/";
import Help from "./Help/";

import CustomDrawerContent from "./CustomDrawer";

import { Icon } from "react-native-elements";
import { DrawerActions } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

const Menu = ({ navigation }) => {
  //===========================================
  // desktop menu handler
  //===========================================
  let isLargeScreen = Dimensions.get("window").width >= 768;

  const [dimensions, setDimensions] = useState({ window });

  const onChange = ({ window }) => {
    setDimensions({ window });
  };

  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  });

  //===========================================
  // Burguer menu Icon
  //===========================================
  navigation.setOptions({
    headerRight: () => (
      <Icon
        name="bell"
        type='material-community'
        size={30}
        style={styles.headerIcon}
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      />
    )
  });
  
  if (!isLargeScreen)
    navigation.setOptions({
      headerLeft: () => (
        <Icon
          name="menu"
          size={35}
          style={styles.headerIcon}
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        />
      ),
    });
  else
    navigation.setOptions({
      headerLeft: () => {}
    });

  //===========================================
  // Menu desciption
  //===========================================
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: "#e91e63",
        itemStyle: { marginVertical: 2 }
      }}
      initialRouteName={Strings.navigation.menu.child.home}
      openByDefault
      drawerType={isLargeScreen ? "permanent" : "back"}
      drawerContent={props => <CustomDrawerContent {...props} />}
      //drawerStyle={isLargeScreen ? null : { width: '100%' }}
    >
      <Drawer.Screen
        name={Strings.navigation.menu.child.home}
        options={{ drawerIcon: ({ focused, color, size }) => (
          <Icon
            name="home"
            color={color}
            size={size}
          />
        )}}
        component={Home}
      />
      <Drawer.Screen
        name={Strings.navigation.menu.child.path}
        options={{ drawerIcon: ({ focused, color, size }) => (
          <Icon
            name="near-me"
            color={color}
            size={size}
          />
        )}}
        component={Path}
      />
      <Drawer.Screen
        name={Strings.navigation.menu.child.library}
        options={{ drawerIcon: ({ focused, color, size }) => (
          <Icon
            name="library-books"
            color={color}
            size={size}
          />
        )}}
        component={Library}
      />
      <Drawer.Screen
        name={Strings.navigation.menu.child.messages}
        options={{ drawerIcon: ({ focused, color, size }) => (
          <Icon
            name="chat"
            color={color}
            size={size}
          />
        )}}
        component={Messages}
      />
      <Drawer.Screen
        name={Strings.navigation.menu.child.stats}
        options={{ drawerIcon: ({ focused, color, size }) => (
          <Icon
            name="poll"
            color={color}
            size={size}
          />
        )}}
        component={Stats}
      />
      <Drawer.Screen
        name={Strings.navigation.menu.child.rewards}
        options={{ drawerIcon: ({ focused, color, size }) => (
          <Icon
            type='material-community'
            name="trophy-variant"
            color={color}
            size={size}
          />
        )}}
        component={Rewards}
      />
      <Drawer.Screen
        name={Strings.navigation.menu.child.help}
        options={{ drawerIcon: ({ focused, color, size }) => (
          <Icon
            name="help"
            color={color}
            size={size}
          />
        )}}
        component={Help}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  headerIcon: {
    padding: 10,
    left: 10
  },
});

export default Menu;
