import React from 'react';
import './mystyle.scss';

class AllTodos extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            todoItem:[],
            newTask:"",
            users:[]
           
        }
    }
    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((response) => response.json())
        .then(usersList => {
            this.setState({ users: usersList });
        });
    }
    toggleDone=(todo)=>{
        this.setState({
            todoItem: this.state.todoItem.map((item)=>
            item.task===todo.task?{...item , done:!item.done }: item
            )
        })
    }
    deletTodo=(todo)=>{
        this.setState({
            todoItem: this.state.todoItem.filter((item)=>
            item.task!==todo.task
            )
        })
    }
   allTodos = ()=>this.state.todoItem.map((item)=>(
    <tr>
        <td>{item.task}</td>
        <td>
            <input type="checkbox"
            value={item.done}
            onChange={()=>this.toggleDone(item)}/>
        </td>
        
        {item.done===true? 
        <td>
            <button onClick={()=>this.deletTodo(item)}>Delete
            </button>
        </td> :null
        }
    </tr>
   ));
    updateValue=(event)=>{
        this.setState({newTask:event.target.value});
    };
    addNewTask=()=>{
        let userSelected = document.getElementById("userSelect").value
        if(this.state.newTask===""){
            alert("add todo", 'error')
        } 
        else{
            this.setState({
                todoItem:[...this.state.todoItem,{task:this.state.newTask , done:false, user:userSelected}]
            })
            this.setState({newTask:""})
        }
        console.log(this.state.todoItem)

    };
    render() { 
        return ( 
        <>
            <h1>Add a To-Do</h1>
            <div className="container" >
                <input value={this.state.newTask}
                onChange={this.updateValue}/>
                <button onClick={this.addNewTask}>Add</button>
                <select id="userSelect" placeholder="Select User">
                {this.state.users.map((user)=>
                <option >{user.name}</option>)}
                </select>
            </div>
            <div className="container">
                <table>
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>{this.allTodos()}</tbody>
                </table>
            </div>

        </>
         );
    }
}
 
export default AllTodos;