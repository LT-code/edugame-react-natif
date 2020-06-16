import * as React from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity
} from "react-native";
import {} from "react-native-elements";
import Strings from "../../contants/Strings/";

function coucou() {
  alert("coucou");
}

function Item(props) {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.item}
        onPress={coucou}
      >
        <Text style={styles.title}>{props.user.choose_type}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default () => {
  return Object.keys(Strings.user).map(key => (
    <Item key={Strings.user[key].id} user={Strings.user[key]} />
  ));
};

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
    flex: 1
  },
  title: {
    fontSize: 32
  }
});
