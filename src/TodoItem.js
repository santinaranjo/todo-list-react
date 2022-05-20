import React from "react";
import "./TodoItem.css";

function TodoItem(props){
    return(
        <li className="todo__item">
            <span className={`icon icon__check ${props.completed && "icon__check--active"}`}>☐</span>
            <span className={`icon icon__check icon__checked ${props.completed && "icon__checked--active"}`}>☑</span>
            <p className={`todo__item--p ${props.completed && "todo__item--p-completed"}`}>{props.text}</p>
            <span className="icon icon__delete">✖</span>
        </li>
    );
}

export { TodoItem };