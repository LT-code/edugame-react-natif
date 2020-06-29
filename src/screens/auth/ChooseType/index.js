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
  return Object.keys(Strings.user).map(key => (
    <Type key={Strings.user[key].id} navigation={navigation} user={Strings.user[key]} />
  ));
};
export default ChooseType;
