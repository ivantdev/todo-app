import React from "react";

function TodoLoading() {
    return (
        <div className="loading__container">
            <span className="item__check"></span>
            <p className="item__text">Loading ToDo</p>
            <span className="item__delete"><i className="fa-duotone fa-trash-can"></i></span>
        </div>
    );
}

export { TodoLoading };