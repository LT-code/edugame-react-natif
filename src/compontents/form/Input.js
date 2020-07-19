import * as React from "react";
import { Icon } from "react-native-elements";
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from "react-native";

import Strings from "../../contants/Strings/";

const styles = StyleSheet.create({
  input: {
    width: "100%",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  inputText:{
    height:50,
  }
});

export default props => {
  const input = React.createRef();
  //console.log(input);
  //
  //if(props.focus)
  //  input.focus();

  return (
    <View style={[styles.input, props.style]}>
      <TextInput
        style={styles.inputText}
        value={props.value}
        onChangeText={props.onChangeText}
        ref={input}
        placeholder={Strings.screens[props.screen].input[props.placeholder]}
        placeholderTextColor={props.placeholderTextColor}
        errorStyle={{ color: props.errorColor ? props.errorColor : "red" }}
        errorMessage={Strings.screens[props.screen].input[props.errorMessage]}
        secureTextEntry={props.secureTextEntry}
      />
    </View>
  );
};
