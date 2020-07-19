import * as React from "react";
import { Icon } from "react-native-elements";
import { Platform, Alert } from "react-native";

import Strings from "../contants/Strings/";

const phone = (title, question, callback) => {
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
        onPress: () => callback()
      }
    ],
    { cancelable: false }
  );
};

const web = (title, question, callback) => {
  const res = window.confirm(`${title}\n${question}`);
  if (res) callback();
};

const AlertOk = (title, question, callback) => {
  Platform.select({
    android: phone(title, question, callback),
    web: web(title, question, callback)
  });
};

export default (title, question, callback) => {
  AlertOk(title, question, callback);
};
