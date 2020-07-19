import React, { useContext, useState, useEffect } from "react";
import AppContext from "../../compontents/AppContext";
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

import { TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { DrawerActions } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

const Menu = ({ navigation }) => {
  const myContext = useContext(AppContext);

  //===========================================
  // Burguer menu Icon
  //===========================================
  if (!myContext.isLargeScreen)
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        >
          <Icon name="menu" size={25} style={styles.headerIcon} />
        </TouchableOpacity>
      )
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
      drawerType={myContext.isLargeScreen ? "permanent" : "back"}
      drawerContent={props => (
        <CustomDrawerContent style={{ height: "100%" }} {...props} />
      )}
    >
      <Drawer.Screen
        name={Strings.navigation.menu.child.home}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Icon name="home" color={color} size={size} />
          )
        }}
        component={Home}
      />
      <Drawer.Screen
        name={Strings.navigation.menu.child.path}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Icon name="near-me" color={color} size={size} />
          )
        }}
        component={Path}
      />
      <Drawer.Screen
        name={Strings.navigation.menu.child.library}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Icon name="library-books" color={color} size={size} />
          )
        }}
        component={Library}
      />
      <Drawer.Screen
        name={Strings.navigation.menu.child.messages}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Icon name="chat" color={color} size={size} />
          )
        }}
        component={Messages}
      />
      <Drawer.Screen
        name={Strings.navigation.menu.child.stats}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Icon name="poll" color={color} size={size} />
          )
        }}
        component={Stats}
      />
      <Drawer.Screen
        name={Strings.navigation.menu.child.rewards}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              type="material-community"
              name="trophy-variant"
              color={color}
              size={size}
            />
          )
        }}
        component={Rewards}
      />
      <Drawer.Screen
        name={Strings.navigation.menu.child.help}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Icon name="help" color={color} size={size} />
          )
        }}
        component={Help}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  headerIcon: {
    marginRight: 10,
    marginLeft: 10,
    textAlign: "center"
  }
});

export default Menu;
