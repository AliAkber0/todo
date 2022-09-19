import React from "react";
import List from "../List/List";
import { useSelector } from "react-redux";
import "../../Styles/showTodos.scss";

const ShowTodos = ({ deleteTodoHandler }) => {
  const todoList = useSelector((state) => state?.todoList);
  const [editState, setEditState] = useState({
    editTodo: "",
    isEdit: false,
    edit: -1,
  });

  const editTodoInputOnChange = (e) => {
    this.setState({ editTodo: e.target.value });
  };

  const editTodo = (id) => {
    this.setState({ edit: id, isEdit: true, editTodo: "" });
  };

  const cancelEditTodo = () => {
    this.setState({ edit: -1, isEdit: false, editTodo: "" });
    this.props.clearEditingError();
  };

  const editTodoOnKeyPress = async (e) => {
    if (e.keyCode === 13 && this.state.editTodo) {
      const isSuccesfull = await this.props.editUserHandler(
        this.state.edit,
        this.state.editTodo
      );
      isSuccesfull && this.cancelEditUser();
    }
  };

  return (
    <>
      {todoList?.length ? (
        <div className="show-todos">
          {todoList.map((todo, index) => {
            if (editState.isEdit && index === editState.edit) {
              return (
                <Input
                  value={editState.editTodo}
                  placeHolder="new todo"
                  onChange={editTodoOnChange}
                />
              );
            }
            return (
              <List
                data={todo}
                key={`${index}-${todo}`}
                deleteTodoHandler={deleteTodoHandler}
                id={index}
              />
            );
          })}
        </div>
      ) : null}
    </>
  );
};

export default ShowTodos;
