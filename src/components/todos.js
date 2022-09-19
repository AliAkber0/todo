import React, { Component } from "react";
import Todo from "./todo";
import AddTodo from "./addTodo";
import "../my-sass.scss";
import axios from "axios";

import Users from "./users";
class Todos extends Component {
  state = {
    posts: [],
    editing: false,
  };
  getTime() {
    let d = new Date();
    let n = d.getTime();
    return n;
  }
  handleDelete = (todo) => {
    let books = [];
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${todo}`)
      .then((Response) => {
        if (Response) {
          books = this.state.books.filter((t) => {
            return t.id !== todo;
          });
          this.setState({ books });
        }
      });
  };
  addNewTodo = (value) => {
    if (value) {
      axios
        .post(`https://jsonplaceholder.typicode.com/users`, {
          name: value.name,
          username: value.username,
        })
        .then((Response) => {
          const books = [...this.state.books];
          books.push(Response.data);
          this.setState({ books });
        });
    }
  };
  deleteAllTodo = () => {
    this.setState({ todos: "" });
  };
  updateHandler = (value) => {
    const books = this.state.books.map((item) => {
      if (item.id === value.id) {
        return { ...item, name: value.content };
      }
      return item;
    });
    this.setState({ books });
  };

  componentDidMount() {
    axios(`https://jsonplaceholder.typicode.com/users`).then((Response) => {
      this.setState({ books: Response.data });
    });
  }

  render() {
    return (
      <div className="outer-div">
        <h2>Fetching Data with Axios</h2>
        {this.state.books
          ? this.state.books.map((todo, index) => (
              <Users
                index={index + 1}
                todo={todo}
                // key={todo.id}
                fooDelete={this.handleDelete}
                update={this.updateHandler}
                editing={this.state.editing}
              />
            ))
          : null}
        <div>
          <AddTodo
            fooAddTodo={this.addNewTodo}
            addTodoValue={this.state.valueid}
          />
        </div>
      </div>
    );
  }
}
export default Todos;
