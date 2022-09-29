import React, { useContext, useState } from 'react';
import './mystyle.scss';
import AppTheme from './Layout/Colors';
import ThemeContext from '../Context/ThemeContext'


let todoID=0;
const FunctionalTodo = () => {

    const theme = useContext(ThemeContext)[0];
    const currentTheme = AppTheme[theme];
    
    const [todoItems,setTodoItems]= useState([]);
    const [todo,setTodo] = useState('');
    // alert(todoID++)
 
    const addNewTask=(e)=>{
        e.preventDefault();

        if(todo===""){
            alert("add todo", 'error')
        } 
        else{
            todoID=todoID+1;
            setTodoItems(oldItems => {
                setTodo("");
                return [...oldItems,{ id:todoID, task:todo , done:false}]
            });
            
        }
    };
    const toggleDone=(ID)=>{ setTodoItems(oldItems=>oldItems.map(item => item.id === ID ? {...item , done:!item.done} : item)) }
   
    const deleteTodo = (ID)=>{
        const filteredTodos= todoItems.filter(task => task.id !== ID)
        setTodoItems(filteredTodos)
    }
    

    return (
        <>
         <main style = {{
                padding: "1rem",
                backgroundColor: `${currentTheme.backgroundColor}`,
                color: `${currentTheme.textColor}`,        
            }}>
        <h1 style={{display:"flex",justifyContent:"center"}}>Add a To-Do</h1>
        <div className="container" >
            <form onSubmit={addNewTask}>
                <input placeholder='Add Task' value={todo}
                onChange={(e)=>setTodo(e.target.value)}/>
                <button type='submit'>Add</button>
            </form>
            <button onClick={()=>setTodoItems([])}>Delete All Todo's</button>
        </div>

        <div className="container">
            <table>
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Status</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {todoItems.map((item)=>(
                        <tr key={item.id}>
                            <td>{item.task}</td>
                            <td>
                                <input type="checkbox"
                                defaultChecked={item.done}
                                onChange={()=>toggleDone(item.id)}
                                />
                            </td>
                            {item.done===true? 
                            <td>
                                <button onClick= {()=>deleteTodo(item.id)} >Delete </button>
                            </td> :null
                            }
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        </main>
        </>
    );
};

export default FunctionalTodo;
