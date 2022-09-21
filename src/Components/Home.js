import { Fragment } from "react";
import Heading from "./Heading";
import UserList from "./UserList.js";
import { removeUser, fetchUser, addUser } from "../modals/actions";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Button } from "reactstrap";
import "../Styles/homeStyle.scss";

const Home = () => {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.addReducer.users);

  const fetchAllUSer = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(({ data }) => {
      dispatch(fetchUser(data));
    });
  };

  return (
    <div className="parent-div">
      <Heading />
      <UserList />
      <Button onClick={fetchAllUSer} className="fetch-btn">
        Fetch Users
      </Button>
    </div>
  );
};

export default Home;
