import React from "react";
import List from "../List/List";
import "../../Styles/showTodos.scss";

class ShowTodos extends React.Component {
  render() {
    if (this.props.error) {
      return <div className="no-todos-added">{this.props.error}</div>;
    }
    return this.props.isLoading ? (
      <div className="loading-todos">{`Loading todos using ${this.props.apiMethod}...`}</div>
    ) : (
      <>
        {this.props.todoList.length ? (
          <div className="show-todos">
            {this.props.todoList.map((todo, index) => (
              <List
                data={todo}
                key={`${index}-${todo}`}
                deleteTodoHandler={this.props.deleteTodoHandler}
                id={index}
              />
            ))}
          </div>
        ) : (
          <div className="no-todos-added">No todos added</div>
        )}
      </>
    );
  }
}

export default ShowTodos;
