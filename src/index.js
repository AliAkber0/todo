import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";
import AddEmployees from "./Components/AddEmployees";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { GlobalProvider } from "./Store/Globalstate";

const App = () => {
  return (
    <GlobalProvider>
      <Switch>
        <Route path="/" component={AddEmployees} exact />
      </Switch>
    </GlobalProvider>
  );
};

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
