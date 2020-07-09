import * as React from "react";
import { Icon } from "react-native-elements";
import { Platform, Alert } from "react-native";

import Strings from "../contants/Strings/";

const phone = (title, question) => {
  Alert.alert(
    title,
    question,
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
  );
};

const web = (title, question) => {};

const alert = (title, question) => {
  Platform.select({
    android: phone(title, question),
    web: web(title, question)
  });
};

export default (title, question) => {
  alert(title, question);
};
