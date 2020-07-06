import * as React from "react";
import { Platform, StyleSheet, Text, View, Alert } from "react-native";
import { ListItem, Icon  } from "react-native-elements";

import Reward from './Reward';

const messageType = {
  BADGE: {
    name: 'check-circle-outline',
  },
  HABILLAGE: {
    name: 'hanger',
  },
};

const Rewards = () => {
  const data = [
    {
      date: "10/06/2020",
      message: "Badge - Explorateur",
      type: messageType.BADGE,
    },
    {
      date: "10/06/2020",
      message: "Habillage - chwapo",
      type: messageType.HABILLAGE,
    },
    {
      date: "10/06/2020",
      message: "Badge - Explorateur",
      type: messageType.BADGE,
    },
    {
      date: "10/06/2020", message: "Habillage - chwapo",
      type: messageType.HABILLAGE,
    },
    {
      date: "10/06/2020",
      message: "Badge - Explorateur",
      type: messageType.BADGE,
    },
    {
      date: "10/06/2020",
      message: "Habillage - chwapo",
      type: messageType.HABILLAGE,
    },
    {
      date: "10/06/2020",
      message: "Badge - Explorateur",
      type: messageType.BADGE,
    },
    {
      date: "10/06/2020",
      message: "Habillage - chwapo",
      type: messageType.HABILLAGE,
    },
  ];

  return data.map((reward, i) => (
    <ListItem
        key={i}
        leftIcon={() => (
          <Icon style={styles.itemIcon} name={reward.type.name} type='material-community' />
        )}
        title={reward.message}
        subtitle={reward.date}
        bottomDivider
      />
  ));
  // <Reward value={reward} />
};

const styles = StyleSheet.create({
  itemIcon: {
    paddingRight: 10,
  }
});

export default Rewards;
