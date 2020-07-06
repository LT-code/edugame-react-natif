import * as React from "react";
import { Input, Icon } from "react-native-elements";

import Strings from "../../contants/Strings/";

export default props => {
  const input = React.createRef();
  //console.log(input);
  //
  //if(props.focus)
  //  input.focus();

  return (
    <Input
      ref={input}
      placeholder={Strings.screens[props.screen].input[props.placeholder]}
      errorStyle={{ color: props.errorColor ? props.errorColor : "red" }}
      errorMessage={Strings.screens[props.screen].input[props.errorMessage]}
      leftIcon={props.icon ? <Icon name={(props.icon)} size={24} color="black" /> : null}
      type={props.type}
    />
  );
};
