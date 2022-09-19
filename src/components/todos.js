import React, { Component } from "react";
import Todo from "./todo";
import AddTodo from "./addTodo";
import '../my-sass.scss'
import userEvent from "@testing-library/user-event";
import Users from './users'
class Todos extends Component {
  state = {
    posts:[],
    todos: [
      { id: 1, value: "Todo Frist" },
      { id: 2, value: "Todo second" },
      { id: 3, value: "Todo Third" },
      { id: 5, value: "Todo Fourth" },
    ],
  };
  getTime(){
    let d=new Date();
    let n=d.getTime();
    return n;
  }
  handleDelete=todo=>{
    const todos=this.state.todos.filter((t)=>{
        return t.id!==todo
    })
    this.setState({todos})
  }
  addNewTodo = value => {
    if (value) {
        const todos = [...this.state.todos];
        todos.push(
            {
                id: this.getTime(),
                value: value,
                isDone: false
            }
        );
        this.setState({ addTodoValue: "", todos })
    } else {
        console.log("Please Add Todo Text");
    }
}
  deleteAllTodo=()=>{
    this.setState({todos:''})
  }


  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((response) => response.json())
    .then(booksList => {
        this.setState({ books: booksList });
    });
}

  render() {

    console.log(this.state.books,'books')
    return(
         <div> 

                            {
                    this.state.books?
                    this.state.books.map((todo, index) => (
                    
                            <Users index={index+1} todo={todo} fooDelete={this.handleDelete} />
                        
                    )):null}
                                        {/* <div className="tp-margin">
                    <AddTodo fooAddTodo={this.addNewTodo} addTodoValue={this.state.addTodoValue}/>

                    </div> */}
                    {/* <div>
                      <button onClick={this.deleteAllTodo} className="all-delete-btn">
                        Delete All
                      </button>
                    </div> */}


    </div>)
  }
}
export default Todos;
