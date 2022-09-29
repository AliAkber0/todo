import './App.css';
import { useEffect } from 'react';
import {getUser} from "../src/Store/action"
import { useDispatch,useSelector} from "react-redux"

function App() {
  const dispatc = useDispatch();
  const users = useSelector((state)=> state.user.users)
  const loading = useSelector((state)=>state.user.loading)
  console.log(users)
  
  useEffect(()=>{
    dispatc(getUser())
  }, []);


  return (
    <div className="App">
     <h1>Redux-saga Fetch User Api</h1>
      {loading && <h2>Loading..</h2> }
      {users.map(user=>(<h1>{user.name}</h1>))}
    </div>
  );
}

export default App;
