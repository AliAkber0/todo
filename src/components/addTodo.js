import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        defaultValue: "",
        value: this.props.addTodoValue
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        });
    }

    clearInput = () => {

        document.getElementById("todoValue").value = "";
        

        this.setState({value:""});
    }

    addTodo = () => {
        this.props.fooAddTodo(this.state.value);
        this.clearInput();
    }

    render() {
        return (
            <div >
                <input type="text"  id="todoValue" placeholder="ToDo" onChange={this.handleChange} />
                <div >
                    <button onClick={this.addTodo}  type="button" >Add New ToDo</button>
                </div>
                
            </div>
        );
    }
}

export default AddTodo;