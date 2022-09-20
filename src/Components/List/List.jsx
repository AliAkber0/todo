import React from "react";
import "../../Styles/list.scss";
import Button from "../Button/Button";
import { removeUser } from "../../ReduxStore/Action/Actions";
import { connect } from "react-redux";

class List extends React.PureComponent {
  render() {
    return (
      <div className="list">
        <div>
          <>{this.props.data.name}</>
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
            deleteUserHandler={this.props.deleteUser}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUser: (id) => dispatch(removeUser(id)),
  };
};

export default connect(null, mapDispatchToProps)(List);
