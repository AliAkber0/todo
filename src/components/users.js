import React, { Component } from "react";


class users extends Component{
    
    render(){

        return(
            
            <div>
                <div >
                  <h4>{this.props.todo.title}</h4> 
                </div>
                <div >
                  <p>{this.props.todo.body}</p> 
                </div>

            </div>
        )
    }
}
export default users;