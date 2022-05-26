import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton() {
    const onClickButton = (msg) => {
        alert(msg);
    }


    return (
        <React.Fragment>
            <section className="button__container">
                <button
                    className="todo__button"
                    onClick={() => onClickButton("Aquí se abriría el modal")}
                >
                    +
                </button>
            </section>
        </React.Fragment>
    )
}

export { CreateTodoButton };