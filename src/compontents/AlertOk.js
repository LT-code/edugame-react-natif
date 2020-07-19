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
  console.log("mobile");
};

const web = (title, question, callback) => {
  console.log("wweb");
  const res = window.confirm(`${title}\n${question}`);
  if (res) callback()
};

export default (title, question, callback) => {
  const AlertOk = Platform.select({
    android: ()=> phone(title, question, callback),
    ios: ()=> phone(title, question, callback),
    web: ()=> web(title, question, callback)
  });
  AlertOk();
};
