import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./redux/userActions";
import AddToList from "./components/addToList";
import Card from "./components/card";
import "./App.css";

function App() {
  const state = useSelector((state) => state).toJS();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h1>User List APP</h1>
        <AddToList />
        <div className="list">
          {state?.users && <Card users={state.users} />}
        </div>
      </div>
    </div>
  );
}

export default App;
