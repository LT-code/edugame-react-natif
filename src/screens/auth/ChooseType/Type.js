import * as React from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity
} from "react-native";

const Type = ({ user, navigation }) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.item}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.title}>{user.choose_type}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Type;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#ffcfff",
    height: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
    alignItems: "center"
  },
  itemContainer: {
    padding: 20,
    flex: 1,
  },
  title: {
    fontSize: 32
  }
});
