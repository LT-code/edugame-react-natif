import * as React from "react";
import {
  ScrollView,
  Platform,
  StyleSheet,
  Text,
  View,
  Alert
} from "react-native";
import { Card, Image } from "react-native-elements";

const Home = () => {
  const data = [
    {
      name: "toto",
      level: 9,
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"
    },
    {
      name: "toto",
      level: 9,
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"
    },
    {
      name: "toto",
      level: 9,
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"
    }
  ];

  return (
    <ScrollView style={styles.container}>
      {data.map((user, i) => {
        return (
          <Card style={styles.card} key={i}>
            <Image
              style={styles.image}
              resizeMode="cover"
              source={{ uri: user.avatar }}
            />
            <Text style={styles.name}>{user.name}</Text>
          </Card>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  card: {
    flexWrap: 'wrap'
  },
  image: {
    height: 20
  }
});

export default Home;
