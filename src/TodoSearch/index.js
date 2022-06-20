import React from "react";
import "./TodoSearch.css";
import { TodoContext } from "../TodoContext";

function TodoSearch() {
    const { searchValue, setSearchValue } = React.useContext(TodoContext);

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <React.Fragment>
            <section className="search__input">
                <input
                    className="search__input--field"
                    placeholder="Search tasks..."
                    onChange={onSearchValueChange}
                    value={searchValue}
                />
            </section>
        </React.Fragment>
    )
}

export { TodoSearch };