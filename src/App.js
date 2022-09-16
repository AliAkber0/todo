import { Component } from "react";
import "./App.scss";
const axios = require('axios');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      currentId: null,
      todos: [],
      withFetch: [],
      withAxios: [],
    };
    this.addTodo = this?.addTodo?.bind(this);
    this.deleteTodo = this?.deleteTodo?.bind(this);
    this.updateTodo = this?.updateTodo?.bind(this);
  }


  updateTodo() {
    if (this.state.currentId != null && this.state.value != "") {
      this.setState({
        todos: [
          this.state.value,
          ...this.state.todos.filter((todo, i) => i != this.state.currentId),
        ],
      });
      this.setState({ value: "" });
    }
  }

  deleteTodo(index) {
    const todos = this.state.todos.filter((todo, i) => i != index);
    this.setState({ todos });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>TODO APP</h1>
          <div className="todo">
            <input
              type="text"
              value={this.state.value}
              placeholder="add todo"
              onChange={(e) => this.setState({ value: e.target.value })}
            />
            <button
              className="add-btn"
              disabled={this.state.value.trim().length <= 0}
              onClick={this.addTodo}
            >
              Add
            </button>
            <button
              className="upd-btn"
              disabled={this.state.currentId == null}
              onClick={this.updateTodo}
            >
              Update
            </button>
          </div>
          <ul>
            {this.state.todos.map((todo, i) => (
              <li key={i}>
                <span>{todo}</span>
                <div>
                  <button
                    className="edt-btn"
                    onClick={() => this.setState({ value: todo, currentId: i })}
                  >
                    Edit
                  </button>
                  <button
                    className="del-btn"
                    onClick={() => this.deleteTodo(i)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
          {this.state.todos.length != 0 && (
            <div>
              <span>Total Todos {this?.state?.todos?.length}</span>
              <button
                className="del-btn"
                onClick={() =>
                  this.setState({ todos: [], currentId: null, value: "" })
                }
              >
                Delete ALL TODOS
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
