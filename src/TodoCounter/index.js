import React from "react";
import "./TodoCounter.css";
import taskIcon from "./task-icon.png";

function TodoCounter({ total, completed }) {


    return (
        <React.Fragment>    
            <h1 className="todo__title">Your tasks <img className="task__icon" src={taskIcon} alt="" /></h1>
            
            <h2 className="todo__counter">Completed {completed} of {total} tasks</h2>
        </React.Fragment>
    )
}

export { TodoCounter };