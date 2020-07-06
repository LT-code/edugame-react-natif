import * as React from "react";
import { Button } from "react-native-elements";

import Strings from "../../contants/Strings/";

export default props => {
  return <Button title={Strings.screens[props.screen].button[props.title]} onPress={() => props.onPress()} />;
};
