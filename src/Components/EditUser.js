import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Form, Button, Label, Input, FormGroup } from "reactstrap";
import { editUser } from "../modals/actions";
const EditUser = (props) => {
  const [selectedName, setSelectedName] = useState({ id: "", name: "" });
  const dispatch = useDispatch();
  const users = useSelector((state) => state.addReducer.users);
  const currentId = props.match.params.id;

  const nameChangeHandler = (event) => {
    setSelectedName({ ...selectedName, name: event.target.value });
  };
  const history = useHistory();
  const onSubmitHandler = () => {
    dispatch(editUser(selectedName));
    history.push("/");
  };

  useEffect(() => {
    const userDetail = users.find(
      (user) => parseInt(user.id) === parseInt(currentId)
    );
    setSelectedName(userDetail);
  }, [currentId, users]);
  return (
    <div className="add-outer-div">
      <Form onSubmit={onSubmitHandler}>
        <FormGroup>
          <Label>Name:</Label>
          <Input
            type="text"
            onChange={nameChangeHandler}
            value={selectedName.name}
            name="name"
            placeholder="Enter Name"
          />
        </FormGroup>
        <Button type="submit" color="primary" className="button-submit">
          Submit
        </Button>
        <Link
          to="/"
          className="btn btn-danger"
          style={{ marginLeft: "5px", marginTop: "5px" }}
        >
          Cancel
        </Link>
      </Form>
    </div>
  );
};

export default EditUser;
