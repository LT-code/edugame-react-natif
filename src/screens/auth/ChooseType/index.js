import * as React from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity
} from "react-native";
import Strings from "../../../contants/Strings/";

import Type from "./Type";


const ChooseType = ({ navigation }) => {
  const listType = Strings.screens.choose_type;

  return Object.keys(listType).map(key => (
    <Type key={listType[key].id} navigation={navigation} user={listType[key]} />
  ));
};
export default ChooseType;
