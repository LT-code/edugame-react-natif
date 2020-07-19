import React, { useState } from "react";

import AppContext from "./src/compontents/AppContext";
import Router from "./src/Router";

import { Dimensions } from "react-native";

export default function App() {
  const [screenSize, setScreenSize] = useState(Dimensions.get("window").width);
  const [user, setUser] = useState({
    logged: false,
    token: ""
  });


  const settings = {
    user,
    setUser,
    screenSize,
    setScreenSize,
  };

  return (
    <AppContext.Provider value={settings}>
      <Router />
    </AppContext.Provider>
  );
}
