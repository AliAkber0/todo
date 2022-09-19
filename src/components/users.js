import React, { Component } from "react";
import "../my-sass.scss";

class users extends Component {
  state = {
    post: {
      id: "",
      editing: false,
      content: "",
    },
  };
  onToggleEdit = (t) => {
    this.setState({ editing: true, post: { id: t.id } });
  };
  handleChange = ({ target }) => {
    this.setState((prevState) => ({
      id: this.state.id,
      post: {
        ...prevState.post,
        [target.name]: target.value,
      },
    }));
  };

  render() {
    const {
      post: { content },
    } = this.state;

    return (
      <div className="todo-list">
        {this.state.editing ? (
          <div className="input-field">
            <input
              type="text"
              name="content"
              placeholder="Input user Name"
              value={content}
              onChange={this.handleChange}
            />
            <button
              type="button"
              onClick={() => {
                this.props.update(this.state.post);
                this.setState({ editing: false });
              }}
            >
              Update
            </button>
          </div>
        ) : (
          <>
            <div className="user-list">
              <p style={{ marginRight: 20 }}>{this.props.todo.id}:</p>
              <p> {this.props.todo.name}</p>
            </div>
            <div
              style={{
                display: "flex",

                justifyContent: "space-between",
              }}
            >
              <button onClick={() => this.props.fooDelete(this.props.todo.id)}>
                Delete
              </button>
              <button
                style={{ margin: "0 10px" }}
                onClick={() => {
                  this.setState(this.onToggleEdit(this.props.todo));
                }}
              >
                Update
              </button>
            </div>
          </>
        )}
      </div>
    );
  }
}
export default users;
