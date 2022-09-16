import React, { Component } from "react";
import Todo from "./todo";
import AddTodo from "./addTodo";
import '../my-sass.scss'
class Todos extends Component {
  state = {
    todos: [
      { id: 1, value: "Todo Frist" },
      { id: 2, value: "Todo Frist" },
      { id: 3, value: "Todo Frist" },
      { id: 5, value: "Todo Frist" },
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

  render() {
    return(
         <div>
        {
                    this.state.todos?
                    this.state.todos.map((todo, index) => (
                    
                            <Todo index={index+1} todo={todo} fooDelete={this.handleDelete} />
                        
                    )):null}
                    <div className="tp-margin">
                    <AddTodo fooAddTodo={this.addNewTodo} addTodoValue={this.state.addTodoValue}/>

                    </div>


    </div>)
  }
}
export default Todos;
