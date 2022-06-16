import React from "react";
import ReactDOM from "react-dom";
import { TodoContext } from "../TodoContext";
import "./Modal.css";

function Modal() {
    const { searchedTodos, setOpenModal } = React.useContext(TodoContext);

    const onClickClose = () => {
        setOpenModal(prevState => !prevState);
};

    return ReactDOM.createPortal(
        <div className="ModalBackground">
            <span onClick={onClickClose}>✖</span>
            <p>{searchedTodos[0]?.text}</p>
        </div>,
        document.getElementById("modal")
    );
}

export { Modal };