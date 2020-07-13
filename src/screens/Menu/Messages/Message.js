import * as React from "react";
import { Platform, StyleSheet, Text, View, Alert } from "react-native";
import { ListItem, Icon } from "react-native-elements";

const Message = ({ item: message }) => {
  return (
    <ListItem
      leftIcon={() => (
        <Icon style={styles.itemIcon} name={"home"} type="material-community" />
      )}
      badge={
        message.nbMessageUnread > 0
          ? {
              value: message.nbMessageUnread,
              status: "success",
              textStyle: { paddingRight: 10, paddingLeft: 10 },
              containerStyle: { color: "gray" }
            }
          : undefined
      }
      title={message.name}
      subtitle={message.lastmessage}
      bottomDivider
      chevron
    />
  );
};

const styles = StyleSheet.create({
  itemIcon: {
    paddingRight: 10
  }
});

export default Message;
