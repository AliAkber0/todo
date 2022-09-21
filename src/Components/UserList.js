import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, ListGroup, ListGroupItem } from "reactstrap";
import "../Styles/addEmployee.scss";
import { removeUser } from "../modals/actions";
const UserList = () => {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.addReducer.users);
  const allUser = users.flatMap((nam) => nam);

  let key = "id";
  const UniqueMembers = [
    ...new Map(allUser.map((item) => [item[key], item])).values(),
  ];

  return (
    <div className="item-position">
      {users.length > 0 ? (
        <Fragment>
          {UniqueMembers.map((user) => (
            <div key={user.id} className="list-class">
              <div style={{ marginRight: 40, float: "left", textAlign: "end" }}>
                <strong>{user.name}</strong>
              </div>

              <div>
                <div>
                  <Link to={`/edit/${user.id}`} className="btn btn-primary">
                    Edit
                  </Link>
                  <Button
                    className="delete-btn"
                    onClick={() => dispatch(removeUser(user.id))}
                    color="danger"
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </Fragment>
      ) : (
        <h4 className="text-center">No record</h4>
      )}
    </div>
  );
};
export default UserList;
