import * as React from "react";

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "react-native";

import Menu from "./src/screens/Menu";
import Login from "./src/screens/auth/Login";
import ChooseType from "./src/screens/auth/ChooseType";

import Strings from "./src/contants/Strings";

const Stack = createStackNavigator();

const linking = {
  prefixes: ['https://edugame.com', 'edugame://'],
};

export default function App() {
  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <Stack.Navigator initialRouteName={Strings.navigation.menu.title}>
        <Stack.Screen
          name={Strings.navigation.menu.title}
          component={Menu}
        />

        <Stack.Screen
          name={Strings.navigation.login.title}
          component={Login}
          options={{
            title: Strings.navigation.login.title,
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
          name={Strings.navigation.chooseType.title}
          component={ChooseType}
          options={{
            title: Strings.navigation.chooseType.title,
            animationTypeForReplace: "pop"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
