import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Styles/app.scss";
import AddUser from "./Components/AddUser/AddUser";
import ShowUser from "./Components/ShowUsers/ShowUsers";
import Loading from "./Components/Loading/Loading";
import Error from "./Components/Error/Error";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <h3>User App Redux Saga Immutable JS React Router V6</h3>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <NavBar />
                <AddUser />
                <Loading />
                <Error />
              </>
            }
          />
          <Route
            exact
            path="/show-user"
            element={
              <>
                <NavBar />
                <Loading />
                <Error />
                <ShowUser />
              </>
            }
          />
          <Route
            exact
            path="/edit-user"
            element={
              <>
                <NavBar />
                <Loading />
                <Error />
                <ShowUser />
              </>
            }
          />
          <Route
            exact
            path="/delete-user"
            element={
              <>
                <NavBar />
                <Loading />
                <Error />
                <ShowUser />
              </>
            }
          />
          <Route
            path="*"
            element={<div className="not-found">Page Not Found</div>}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
