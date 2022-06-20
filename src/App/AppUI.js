import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoItem } from "../TodoItem";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import "./AppUI.css";

function AppUI() {
    const { error, loading, searchedTodos, completeTodo, deleteTodo, openModal, setOpenModal } =  React.useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {loading && <p className="loading__title">We are loading...</p>}
                {error && <p className="loading-error__title">Something wrong happened...</p>}
                {(!loading && !searchedTodos.length) && <p className="add-todo__title">¡Create your first TODO!</p>}
                {searchedTodos.map(todo =>(
                <TodoItem
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                    />))}
            </TodoList> 

            {openModal && (
                <Modal>
                    <TodoForm></TodoForm>
                </Modal>
            )}

            <CreateTodoButton
                setOpenModal={setOpenModal}
            />
        </React.Fragment>
    );
}

export { AppUI };