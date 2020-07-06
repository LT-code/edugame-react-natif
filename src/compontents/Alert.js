import * as React from "react";
import { Icon } from "react-native-elements";
import { Platform, Alert } from "react-native";

const phone = (title, question, options) => {
  Alert.alert(
    title,
    question,
    options,
    { cancelable: false }
  );
};

const web = (title, question, options) => {};

const alert = (title, question, options) => {
  Platform.select({
    ios: phone(title, question, options),
    android: phone(title, question, options),
    web: web(title, question, options)
  });
};

export default (title, question, options) => {
  return alert(title, question, options);
};
