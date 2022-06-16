import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton(props) {
    const onClickButton = () => {
            props.setOpenModal(prevState => !prevState);
    }


    return (
        <React.Fragment>
            <section className="button__container">
                <button
                    className="todo__button"
                    onClick={onClickButton}
                >
                    +
                </button>
            </section>
        </React.Fragment>
    )
}

export { CreateTodoButton };