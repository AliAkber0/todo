import { useDispatch, useSelector } from "react-redux";
import AddToDo from "./components/addToDo";
import ListToDos from "./components/listToDos";
import "./App.scss";
import { DELETALL } from "./redux/actionTypes";

function App() {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state);

  return (
    <div className="App">
      <div className="container">
        <h1>TODO APP</h1>
        <AddToDo />
        <ListToDos />
        {list?.length != 0 && (
          <div>
            <span>Total Todos {list?.length}</span>
            <button
              disabled={list.length <= 0}
              className="del-btn"
              onClick={() => dispatch({ type: DELETALL })}
            >
              Delete ALL TODOS
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
