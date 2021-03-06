import React, { useState, useContext } from "react";
import AppContext from "./compontents/AppContext";

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { Icon, Badge, Header } from "react-native-elements";
import { DrawerActions } from "@react-navigation/native";

import Menu from "./screens/Menu";
import Login from "./screens/auth/Login/";
import ChooseType from "./screens/auth/ChooseType";

import Strings from "./contants/Strings";

const Stack = createStackNavigator();

const linking = {};

export default function App() {
  const myContext = useContext(AppContext);
  
  // linking={linking}
  return (
    <NavigationContainer  fallback={<Text>Loading...</Text>}>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true
        }}
        initialRouteName={
          myContext.user.logged
            ? Strings.navigation.menu.title
            : Strings.navigation.chooseType.title
        }
      >
        {myContext.user.logged && (
          <Stack.Screen
            options={({ navigation, route }) => ({
              headerTitle: props => <Text {...props} />,
              headerRight: () => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.dispatch(DrawerActions.toggleDrawer())
                  }
                >
                  <Icon
                    style={styles.headerIcon}
                    name="bell"
                    type="material-community"
                    size={25}
                  />
                  <Badge
                    style={styles.iconBadge}
                    status="error"
                    containerStyle={{
                      position: "absolute",
                      top: -4,
                      right: 7
                    }}
                    value={1}
                  />
                </TouchableOpacity>
              )
            })}
            name={Strings.navigation.menu.title}
            component={Menu}
          />
        )}

        <Stack.Screen name={Strings.navigation.login.title} component={Login} />

        <Stack.Screen
          name={Strings.navigation.chooseType.title}
          component={ChooseType}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerIcon: {
    marginRight: 15,
    marginLeft: 10,
    textAlign: "center"
  },
  spaceView: {
    width: 5
  }
});
