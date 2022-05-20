import React from "react";
import "./TodoCounter.css";
import taskIcon from "./task-icon.png";

function TodoCounter() {
    return (
        <React.Fragment>    
            <h1 className="todo__title">Your tasks <img className="task__icon" src={taskIcon} alt="" /></h1>
            
            <h2 className="todo__counter">Completed 1 of 3 tasks</h2>
        </React.Fragment>
    )
}

export { TodoCounter };