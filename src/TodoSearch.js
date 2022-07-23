import React from "react";

function TodoSearch( { searchValue, setSearchValue} ) {
    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    };
    return (
        <React.Fragment>
            <form 
                className="main__search" 
                onSubmit={(event) => {
                    event.preventDefault();
                }}
            >
                <span className="search__icon">
                    <i className="fa-regular fa-magnifying-glass"></i>
                </span>
                <input 
                    placeholder="cebollas de pavo" 
                    className="search__input"
                    value={searchValue}
                    onChange={onSearchValueChange}
                />
            </form>
        </React.Fragment>
    );
}

export { TodoSearch };