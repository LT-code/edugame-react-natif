import React, { useState, useEffect }  from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Dimensions, StyleSheet } from "react-native";
import {  } from 'react-native';

import Strings from "../../contants/Strings/";

import Home from "./Home/";
import Path from "./Path/";
import Library from "./Library/";
import Messages from "./Messages/";
import Stats from "./Stats/";
import Rewards from "./Rewards/";
import Help from "./Help/";

import { Icon } from "react-native-elements";
import { DrawerActions } from "@react-navigation/native";

const Drawer = createDrawerNavigator();


const Menu =  ({ navigation }) => {
  // desktop menu handler
  let isLargeScreen = Dimensions.get('window').width >= 768;

  const [dimensions, setDimensions] = useState({ window, screen });

  const onChange = ({ window, screen }) => {
    setDimensions({ window, screen });
  };

  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  });


  // Burguer menu Icon 
  React.useLayoutEffect(() => {
    if(isLargeScreen)
      navigation.setOptions({
        headerLeft: () => (
          <Icon
            name="menu"
            size={35}
            style={styles.leftIcon}
            onPress={() =>  navigation.dispatch(DrawerActions.toggleDrawer())}
          />
        ),
      });
  }, [navigation]);

  // Menu desciption
  return ( 
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: "#e91e63",
        itemStyle: { marginVertical: 2 }
      }}
      initialRouteName={Strings.menu.title.home}
      openByDefault
      drawerType={isLargeScreen ? 'permanent' : 'back'}
      //drawerStyle={isLargeScreen ? null : { width: '100%' }}
    >
      <Drawer.Screen name={Strings.menu.title.home} component={Home} />
      <Drawer.Screen name={Strings.menu.title.path} component={Path} />
      <Drawer.Screen name={Strings.menu.title.library} component={Library} />
      <Drawer.Screen name={Strings.menu.title.messages} component={Messages} />
      <Drawer.Screen name={Strings.menu.title.stats} component={Stats} />
      <Drawer.Screen name={Strings.menu.title.rewards} component={Rewards} />
      <Drawer.Screen name={Strings.menu.title.help} component={Help} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  leftIcon: {
    padding: 10
  }
});

export default Menu;
