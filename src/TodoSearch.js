import React from "react";

function TodoSearch() {
    return (
        <React.Fragment>
            <form className="main__search">
                <span className="search__icon">
                    <i className="fa-regular fa-magnifying-glass"></i>
                </span>
                <input placeholder="cebollas de pavo" className="search__input" />
            </form>
        </React.Fragment>
    );
}

export { TodoSearch };