import * as React from "react";
import { Button } from "react-native-elements";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import Strings from "../../contants/Strings/";

/* <Button
      style={props.style}
      title={Strings.screens[props.screen].button[props.title]}
      onPress={() => props.onPress()}
    />
    */

export default props => {
  const styles = StyleSheet.create({
    button: {
      width: "100%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center"
    },
    text: props.textStyle
  });

  return (
    <TouchableOpacity
      onPress={() => props.onPress()}
      style={[styles.button, props.style]}
    >
      <Text style={styles.text}>
        {Strings.screens[props.screen].button[props.title]}
      </Text>
    </TouchableOpacity>
  );
};
