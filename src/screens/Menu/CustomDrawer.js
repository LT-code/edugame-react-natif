import * as React from "react";
import { Icon } from "react-native-elements";
import { StyleSheet } from "react-native";
import Alert from "../../compontents/AlertOk";

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from "@react-navigation/drawer";

import Strings from "../../contants/Strings/";

const CustomDrawerContent = props => {
  return (
    <DrawerContentScrollView style={styles.container} {...props}>
      <DrawerItemList style={styles.container} {...props} />
      <DrawerItem
        style={styles.disconnect}
        label={Strings.navigation.menu.child.disconnect}
        icon={({ focused, color, size }) => (
          <Icon name="exit-to-app" color={color} size={size} />
        )}
        onPress={() =>
          Alert(
            Strings.alert.disconnect.title,
            Strings.alert.disconnect.question
          )
        }
      />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%"
  },
  disconnect: {
    marginTop: "auto"
  }
});

export default CustomDrawerContent;
