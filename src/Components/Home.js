import Heading from "./Heading";
import UserList from "./UserList.js";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import "../Styles/homeStyle.scss";
import { getUserFetch, deleteAllUsers } from "../modals/actions";
const Home = () => {
  const dispatch = useDispatch();
  return (
    <div className="parent-div">
      <Heading />
      <UserList />
      <Button onClick={() => dispatch(getUserFetch())} className="fetch-btn">
        Fetch Users
      </Button>
      <Button onClick={() => dispatch(deleteAllUsers())} className="fetch-btn">
        Delete All Users
      </Button>
    </div>
  );
};

export default Home;
