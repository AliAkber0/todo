import React, { Component, useEffect, useState } from "react";
import AddTodo from "./addTodo";
import "../my-sass.scss";
import axios from "axios";

import Users from "./users";
const Todos = () => {
  const [posts, setposts] = useState([]);
  const handleDelete = (todo) => {
    let books = [];
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${todo.id}`)
      .then((Response) => {
        if (Response) {
          books = posts.filter((t) => {
            return t.id !== todo.id;
          });
          setposts(books);
        }
      });
  };
  const addNewTodo = (value) => {
    if (value) {
      axios
        .post(`https://jsonplaceholder.typicode.com/users`, {
          name: value,
        })
        .then((Response) => {
          const books = [...posts];
          books.push(Response.data);
          setposts(books);
        });
    }
  };
  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users`).then((Response) => {
      setposts(Response.data);
    });
  }, []);

  return (
    <div className="outer-div">
      <h2>Todo With Functional Component</h2>
      {posts
        ? posts.map((todo, index) => (
            <Users
              index={index + 1}
              todo={todo}
              // key={todo.id}
              fooDelete={() => handleDelete(todo)}
            />
          ))
        : null}
      <div>
        <AddTodo fooAddTodo={addNewTodo} />
      </div>
    </div>
  );
};
export default Todos;
