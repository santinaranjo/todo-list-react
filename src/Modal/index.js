import React from "react";
import ReactDOM from "react-dom";
import { TodoContext } from "../TodoContext";
import "./Modal.css";

function Modal(props) {
    const { searchedTodos, setOpenModal } = React.useContext(TodoContext);

    const onClickClose = () => {
        setOpenModal(prevState => !prevState);
};

    return ReactDOM.createPortal(
        <div className="ModalBackground">
            <span onClick={onClickClose}>✖</span>
            {props.children}
        </div>,
        document.getElementById("modal")
    );
}

export { Modal };