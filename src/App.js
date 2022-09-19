import React from "react";
import User from "./Screens/User/User";
import "./Styles/app.scss";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <h3>User App</h3>
        <User />
      </div>
    );
  }
}

export default App;
