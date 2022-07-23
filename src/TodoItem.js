import React from "react";

function TodoItem(props) {

    const onComplete = () => {
        alert("Completaste la tarea");
    };
    const onDelete = () => {
        alert("Eliminaste la tarea");
    };
    
    const completed = props.completed ? "completed" : "";

    return (
        <li className={ `list__item ${completed} ${props.priority}`}>
            <span className="item__check" onClick={onComplete}>
                <span className="check-status">
                    <i className="fa-solid fa-check"></i>
                </span>
            </span>
            <p className="item__text">{props.text}</p>
            <span className="item__delete" onClick={onDelete}>
                <i className="fa-duotone fa-trash-can"></i>
            </span>
        </li>
    );
}

export { TodoItem };