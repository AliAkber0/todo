import React from "react";
import AddTodo from "../../Components/AddTodo/AddTodo";
import Button from "../../Components/Button/Button";
import ShowTodos from "../../Components/ShowTodos/ShowTodos";
import "../../Styles/todo.scss";
import { getDataUsingFetch } from "../../Api/fetch";
import { getDataUsingAxios } from "../../Api/axios";

class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: [],
      todo: "",
      apiMethod: "fetch",
      isLoading: false,
      error: "",
    };
  }

  componentDidMount() {
    this.getTodosUsingFetch();
  }

  setTodos = (todos) => {
    if (todos?.length) {
      this.setState({
        todoList: todos.map((todo) => todo.title),
        isLoading: false,
        error: "",
      });
    } else {
      this.setState({ isLoading: false, error: "error in fetching todos" });
    }
  };

  getTodosUsingAxios = async () => {
    this.setState({ isLoading: true, apiMethod: "Axios" });
    const todos = await getDataUsingAxios();
    this.setTodos(todos);
  };

  getTodosUsingFetch = async () => {
    this.setState({ isLoading: true });
    const todos = await getDataUsingFetch();
    this.setTodos(todos);
  };

  onChangeTodoHandler = (e) => {
    this.setState({ todo: e.target.value });
  };

  addTodoHandler = (e) => {
    if (e.keyCode === 13 && this.state.todo) {
      let newTodoList = this.state.todoList;
      newTodoList.unshift(this.state.todo);

      this.setState({
        todoList: newTodoList,
        todo: "",
        error: "",
      });
    }
  };

  deleteTodoHandler = (id) => {
    const newTodoList = this.state.todoList?.filter((_, index) => index !== id);
    this.setState({ todoList: newTodoList });
  };

  deleteAllTodosHandler = () => {
    this.setState({ todoList: [] });
  };

  render() {
    return (
      <div className="todo">
        <AddTodo
          todo={this.state.todo}
          onChangeTodoHandler={this.onChangeTodoHandler}
          addTodoHandler={this.addTodoHandler}
        />
        {this.state.todoList.length > 0 && (
          <Button
            labelText="Delete All Todos"
            clickHandler={this.deleteAllTodosHandler}
          />
        )}
        <Button
          labelText="Fetch Using Axios"
          clickHandler={this.getTodosUsingAxios}
        />
        <ShowTodos
          error={this.state.error}
          isLoading={this.state.isLoading}
          apiMethod={this.state.apiMethod}
          todoList={this.state.todoList}
          deleteTodoHandler={this.deleteTodoHandler}
        />
      </div>
    );
  }
}

export default Todo;
