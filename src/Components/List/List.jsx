import React from "react";
import "../../Styles/list.scss";
import Button from "../Button/Button";

class List extends React.PureComponent {
  render() {
    return (
      <div className="list">
        <div>
          <>{this.props.data.name}</>
          <>{this.props.data.id}</>
        </div>
        <div>
          <Button
            id={this.props.id}
            labelText="Edit"
            type="edit"
            editUser={this.props.editUser}
          />
          <Button
            id={this.props.id}
            labelText="Delete"
            type="delete"
            deleteUserHandler={this.props.deleteUserHandler}
          />
        </div>
      </div>
    );
  }
}

export default List;
