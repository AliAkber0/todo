import './App.scss';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import ClassTodos from './Components/ClassTodo';
import FunctionalTodo from './Components/FunctionalTodo';
import UserList from './Components/UserList';
import Home from './Components/Home';
import ThemeContext from './Context/ThemeContext';
import { useState } from 'react';

function App() {
  const theme =useState("light");
  return (
   <>
   
    <ThemeContext.Provider value = {theme}>
     
      <BrowserRouter>
      <Home/>
        <Routes>
          <Route path="/todo_class" exact element={<ClassTodos/>}/>
          <Route path="/todo_func" exact  element={<FunctionalTodo/>} />
          <Route path="/user_list" exact  element={<UserList/>} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
   </>
   
  );
}

export default App;
