import * as React from "react";
import {
  ScrollView,
  Platform,
  StyleSheet,
  Text,
  View,
  Alert
} from "react-native";
import { ListItem, Icon } from "react-native-elements";

import Reward from "./Reward";

const messageType = {
  BADGE: {
    name: "check-circle-outline"
  },
  HABILLAGE: {
    name: "hanger"
  }
};

const Rewards = () => {
  const data = [ { date: "10/06/2020", message: "Badge - Explorateur", type: messageType.BADGE }, { date: "10/06/2020", message: "Habillage - chwapo", type: messageType.HABILLAGE }, { date: "10/06/2020", message: "Badge - Explorateur", type: messageType.BADGE }, { date: "10/06/2020", message: "Habillage - chwapo", type: messageType.HABILLAGE }, { date: "10/06/2020", message: "Badge - Explorateur", type: messageType.BADGE }, { date: "10/06/2020", message: "Habillage - chwapo", type: messageType.HABILLAGE }, { date: "10/06/2020", message: "Badge - Explorateur", type: messageType.BADGE }, { date: "10/06/2020", message: "Habillage - chwapo", type: messageType.HABILLAGE }, { date: "10/06/2020", message: "Badge - Explorateur", type: messageType.BADGE }, { date: "10/06/2020", message: "Habillage - chwapo", type: messageType.HABILLAGE }, { date: "10/06/2020", message: "Badge - Explorateur", type: messageType.BADGE }, { date: "10/06/2020", message: "Habillage - chwapo", type: messageType.HABILLAGE }, { date: "10/06/2020", message: "Badge - Explorateur", type: messageType.BADGE }, { date: "10/06/2020", message: "Habillage - chwapo", type: messageType.HABILLAGE }, { date: "10/06/2020", message: "Badge - Explorateur", type: messageType.BADGE }, { date: "10/06/2020", message: "Habillage - chwapo", type: messageType.HABILLAGE } ];

  return (
    <ScrollView>
      {data.map((reward, i) => {
        return <Reward reward={reward} key={i} />;
      })}
    </ScrollView>
  );
};


export default Rewards;
