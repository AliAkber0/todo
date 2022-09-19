import React from "react";
import "../../Styles/list.scss";
import Button from "../Button/Button";

class List extends React.Component {
  render() {
    return (
      <div className="list">
        <>{this.props.data}</>
        <Button
          id={this.props.id}
          labelText="Delete"
          type="delete"
          deleteTodoHandler={this.props.deleteTodoHandler}
        />
      </div>
    );
  }
}

export default List;
