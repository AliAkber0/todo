import React, { useContext, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { GlobalContext } from "../Store/Globalstate";
import "../Styles/addEmployee.scss";

const AddEmployees = () => {
  const history = useHistory();
  const [empId, setEmpId] = useState();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [designation, setDesignation] = useState("");
  const [editMode, setEditMode] = useState(false);

  const { state, dispatch } = useContext(GlobalContext);
  const formSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {
      id: !editMode ? Date.now() : empId,
      name,
      location,
      designation,
    };
    if (!editMode) {
      dispatch({
        type: "ADD_EMPLOYEE",
        payload: newEmployee,
      });
    } else {
      dispatch({
        type: "EDIT_EMPLOYEE",
        payload: newEmployee,
      });
    }
    setName("");
    setLocation("");
    setDesignation("");
    setEditMode(false);
  };

  const cancel = () => {
    setName("");
    setLocation("");
    setDesignation("");
    setEditMode(false);
  };
  const editEmployee = (employee) => {
    setEmpId(employee.id);
    setName(employee.name);
    setLocation(employee.location);
    setDesignation(employee.designation);
    setEditMode(true);
  };
  const deleteEmp = (id) => {
    console.log(id);
    dispatch({
      type: "DELETE_EMPLOYEE",
      payload: id,
    });
  };
  return (
    <React.Fragment>
      <div className="outer-div">
        <form onSubmit={formSubmit}>
          <div className="">
            <label className="label-style" htmlFor="name">
              Name of the Employee
            </label>
            <input
              className="input-style"
              type="text"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div>
            <label className="label-style" htmlFor="location">
              Location
            </label>
            <input
              className="input-style"
              type="text"
              placeholder="Enter your location"
              onChange={(e) => setLocation(e.target.value)}
              value={location}
            />
          </div>
          <div>
            <label className="label-style" htmlFor="name">
              Designation
            </label>
            <input
              className="input-style"
              type="text"
              placeholder="Enter your designation"
              onChange={(e) => setDesignation(e.target.value)}
              value={designation}
            />
          </div>{" "}
          <div className="add-div">
            <div className="">
              <button className="">
                {!editMode ? "ADD EMPLOYEE" : "EDIT EMPLOYEE"}
              </button>
            </div>
            <div className="text-center mt-4 text-gray-500">
              <Link to="/" onClick={cancel}>
                Cancel
              </Link>
            </div>
          </div>
        </form>
      </div>
      <div className="employee-list-outer">
        {state?.employees?.map((employee) => {
          return (
            <div className="employee-list" key={employee.id}>
              <div className="name-des">{employee.name}</div>
              <div className="name-des">{employee.designation}</div>
              <div className="name-des">{employee.location}</div>
              <div className="button-style">
                <button onClick={() => editEmployee(employee)}>Edit</button>
              </div>
              <div className="button-style">
                <button onClick={() => deleteEmp(employee)}>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default AddEmployees;
