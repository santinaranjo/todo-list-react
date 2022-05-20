import React from "react";
import "./TodoSearch.css";

function TodoSearch() {
    return (
        <React.Fragment>
            <section className="search__input">
                <input className="search__input--field" placeholder="Search tasks..." />
            </section>
        </React.Fragment>
    )
}

export { TodoSearch };