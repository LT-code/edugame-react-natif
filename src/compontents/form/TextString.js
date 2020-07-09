import * as React from "react";
import { Text } from "react-native";

import Strings from "../../contants/Strings/";

export default props => {
  return <Text style={props.style}>{Strings.screens[props.screen].text[props.text]}</Text>;
};
