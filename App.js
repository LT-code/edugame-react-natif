import * as React from "react";

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Menu from "./src/screens/Menu/";
import Login from "./src/screens/auth/Login";
import ChooseType from "./src/screens/auth/ChooseType";

const Stack = createStackNavigator();

const linking = {
  prefixes: ['https://edugame.com', 'edugame://'],
};

export default function App() {
  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen
          name="Menu"
          component={Menu}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: "Login",
            animationTypeForReplace: "push"
          }}
          screenOptions={{
            gestureEnabled: true,
            headerStyle: {
              backgroundColor: "#101010"
            },
            headerTitleStyle: {
              fontWeight: "bold"
            },
            headerTintColor: "#ffd700",
            headerBackTitleVisible: false
          }}
        />

        <Stack.Screen
          name="ChooseType"
          component={ChooseType}
          options={{
            title: "Choose type",
            animationTypeForReplace: "pop"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
