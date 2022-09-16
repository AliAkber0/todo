import React from "react";
import Todo from "./Screens/Todo/Todo";
import "./Styles/app.scss";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <h3>Todo App</h3>
        <Todo />
      </div>
    );
  }
}

export default App;
