import React, { Component } from "react";
import "./config/ReactotronConfig";
// import { Text, View } from "react-native";

import { Provider } from "react-redux";

import Routes from "./routes";

const App = () => (
  <Provider store={{}}>
    <Routes />
  </Provider>
);

export default App;
