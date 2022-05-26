import React from "react";
import "./TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue }) {


    const onSearchValueChange = (event) => {
        console.log(event.target.value);
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