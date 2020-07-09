import * as React from "react";
import { ScrollView, Platform, StyleSheet, Text, View } from "react-native";
import User from "./User";

const Home = () => {
  const data = [ { name: "toto", level: 9, purcentage: 40, avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg" }, { name: "toto", level: 9, purcentage: 40, avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg" }, { name: "toto", level: 9, purcentage: 40, avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg" }, { name: "toto", level: 9, purcentage: 40, avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg" }, { name: "toto", level: 9, purcentage: 80, avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg" }, { name: "toto", level: 9, purcentage: 20, avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg" }, { name: "toto", level: 9, purcentage: 20, avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg" }, { name: "toto", level: 9, purcentage: 20, avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg" }, { name: "toto", level: 9, purcentage: 20, avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg" } ];

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.containerTop}>
        <View style={styles.container}>
          {data.map((user, i) => {
            return <User user={user} key={i} />;
          })}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    height: "100%"
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  }
});

export default Home;
