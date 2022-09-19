import { Component } from "react";
import Todos from "./components/todos";
import "./my-sass.scss";

const App = () => {
  return (
    <div>
      <div>
        <Todos />
      </div>
    </div>
  );
};

export default App;
