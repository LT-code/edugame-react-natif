import * as React from "react";
import { Platform, StyleSheet, Text, View, Alert } from "react-native";
import { Button } from "react-native-elements";

const Reward = ({ value }) => {
  return (
    <View>
      <Text>Date : {value.date}</Text>
      <Text>Message : {value.message}</Text>
    </View>
  );
};

export default Reward;
