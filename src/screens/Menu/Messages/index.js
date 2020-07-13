import * as React from "react";
import { StyleSheet, ScrollView, FlatList } from "react-native";

import Message from "./Message";

const Messages = () => {
  const data = [ { id: 1, name: "toto", lastmessage: "coucou toi", nbMessageUnread: 4 }, { id: 2, name: "toto", lastmessage: "coucou toi", nbMessageUnread: 2 }, { id: 5, name: "toto", lastmessage: "coucou toi", nbMessageUnread: 0 }, { id: 3, name: "tata", lastmessage: "coucou toi" }, { id: 4, name: "pedro", lastmessage: "coucou toi", nbMessageUnread: 1 }, ];

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={Message}
    />
  );
};

export default Messages;
