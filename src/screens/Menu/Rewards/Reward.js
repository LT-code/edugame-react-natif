import * as React from "react";
import { Platform, StyleSheet, Text, View, Alert } from "react-native";
import { ListItem, Icon } from "react-native-elements";

const Reward = ({ reward }) => {
  return (
    <ListItem
      leftIcon={() => (
        <Icon
          style={styles.itemIcon}
          name={reward.type.name}
          type="material-community"
        />
      )}
      title={reward.message}
      subtitle={reward.date}
      bottomDivider
    />
  );
};

const styles = StyleSheet.create({
  itemIcon: {
    paddingRight: 10
  }
});

export default Reward;
