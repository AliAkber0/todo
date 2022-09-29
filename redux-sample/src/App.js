import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux"
import {increment, decrement} from "./store/actions/counter"
import store from "./store/createStore"
function App() {
  const count = useSelector(state => state.counter.count)
  const dispatch = useDispatch()
  store.getState(()=>{
    console.log("state chnaged");
    store.getState(count)
  })

  return (
    <div className="App">
      <h1>Hey There</h1>

      <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
    </div>
  );
}

export default App;
