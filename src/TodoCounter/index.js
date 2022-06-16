import React from "react";
import "./TodoCounter.css";
import taskIcon from "./task-icon.png";
import { TodoContext } from "../TodoContext";

function TodoCounter() {
    const { totalTodos, completedTodos } = React.useContext(TodoContext);

    return (
        <React.Fragment>    
            <h1 className="todo__title">Your tasks <img className="task__icon" src={taskIcon} alt="" /></h1>
            
            <h2 className="todo__counter">Completed {completedTodos} of {totalTodos} tasks</h2>
        </React.Fragment>
    )
}

export { TodoCounter };