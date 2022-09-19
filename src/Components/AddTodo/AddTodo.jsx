import React from "react";
import "../../Styles/addTodo.scss";

class AddTodo extends React.Component {
  render() {
    return (
      <input
        className="add-todo"
        placeholder="Add Todo"
        type="text"
        value={this.props.todo}
        onChange={this.props.onChangeTodoHandler}
        onKeyDown={this.props.addTodoHandler}
      />
    );
  }
}

export default AddTodo;
