import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton() {
    return (
        <React.Fragment>
            <section className="button__container">
                <button className="todo__button">+</button>
            </section>
        </React.Fragment>
    )
}

export { CreateTodoButton };