import React from "react";

function TodoList(props) {
    return (
        <ul className="main__list">
            {props.children}
        </ul>
    );
}

export { TodoList };