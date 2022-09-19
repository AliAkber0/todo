import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    defaultValue: "",
    post: {
      name: "",
      username: "",
    },
  };

  handleChange = ({ target }) => {
    this.setState((prevState) => ({
      post: {
        ...prevState.post,
        [target.name]: target.value,
      },
    }));
  };

  addTodo = () => {
    this.props.fooAddTodo(this.state.post);
  };
  render() {
    const {
      post: { content, title },
    } = this.state;

    return (
      <div className="NewPost">
        <h1>Add a User</h1>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={title}
          onChange={this.handleChange}
        />
        <label>username</label>
        <input name="username" value={content} onChange={this.handleChange} />
        <div className="add-button">
          <button onClick={this.addTodo} className="add-button">
            Add Post
          </button>
        </div>
      </div>
    );
  }
}

export default AddTodo;
