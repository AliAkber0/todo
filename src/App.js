import { useEffect, useState } from "react";
import axios from "axios";

import AddToList from "./components/addToList";
import Card from "./components/card";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getUserAsync } from "./redux/userActions";

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserAsync());
  }, [dispatch]);

  // update() {
  //   if (this.state.name.trim().length > 0) {
    //   axios
    //     .patch(
    //       `https://jsonplaceholder.typicode.com/todos/${this.state.userId}`,
    //       {
    //         id: this.state.userId,
    //         name: this.state.name,
    //       }
    //     )
    //     .then((res) => {
    //       this.setState({ name: "", userId: null });
    //       alert("updated successfully .......");
    //     })
    //     .catch((err) => console.log("error :: ", err));
    // } else {
    //   alert("Enter some to text to upadate user name");
    // }
  // }


  return (
    <div className="App">
      <div className="container">
        <h1>User List APP</h1>
        <AddToList />
        <div className="list">
          {state?.withAxios && <Card withAxios={state.withAxios} />}
        </div>
      </div>
    </div>
  );
}

export default App;
