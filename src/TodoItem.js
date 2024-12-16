import React from "react";

function TodoItem(props) {
    const completed = props.completed ? "completed" : "";

    return (
        <li className={ `list__item ${completed} ${props.priority}`}>
            <button className="item__check" onClick={props.onComplete}>
                <span className="check-status">
                    <i className="fa-solid fa-check"></i>
                </span>
            </button>
            <p className="item__text">{props.text}</p>
            <button className="item__delete" onClick={props.onDelete}>
                <i className="fa-duotone fa-trash-can"></i>
            </button>
        </li>
    );
}

export { TodoItem };