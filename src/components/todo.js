import React, { Component } from "react";


class Todo extends Component{
    
    render(){

        return(
            
            <div style={{display:'flex',justifyContent:'center'}}>
                <div>


                    {this.props.index}:     {this.props.todo.value} 
                
                </div>
                <div>
                    <button type="button" style={{marginLeft:10}} onClick={()=>this.props.fooDelete(this.props.todo.id)} >Delete</button>
                </div>
            </div>
        )
    }
}
export default Todo;