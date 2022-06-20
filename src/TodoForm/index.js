import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState("");

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onCancel = () => {
        setOpenModal(false)
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    return (
        <form className="todo__form" onSubmit={onSubmit}>
            <label className="form__label">Add your new Todo</label>
            <textarea
                className="form__textarea"
                value={newTodoValue}
                onChange={onChange}
                placeholder="Go to the supermarket..."
                
            />
            <div className="form__buttons">
                <button className="button form__button--submit" type="submit">Add Todo</button>
                <button className="button form__button--cancel" type="button" onClick={onCancel}>Cancel</button>
            </div>
        </form>
    );
};

export { TodoForm };