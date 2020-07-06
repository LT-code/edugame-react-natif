import * as React from "react";
import { Icon } from "react-native-elements";
import Alert from "../../compontents/Alert";

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from "@react-navigation/drawer";

import Strings from "../../contants/Strings/";

const CustomDrawerContent = props => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label={Strings.navigation.menu.child.disconnect}
        icon={({ focused, color, size }) => (
          <Icon name="exit-to-app" color={color} size={size} />
        )}
        onPress={() =>
          Alert(
            Strings.alert.disconnect.title,
            Strings.alert.disconnect.question,
            [
              {
                text: Strings.alert.cancel,
                style: "cancel"
              },
              {
                text: Strings.alert.ok,
                onPress: () =>
                  props.navigation.replace(Strings.navigation.chooseType.title)
              }
            ],
            { cancelable: false }
          )
        }
      />
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
