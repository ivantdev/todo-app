import React from "react";

function CreateTodoButton(props) {
    const onClickButton = () => {
        alert("aqui va un modal");
    };
    return (
        <button
            className="main__add-button"
            onClick={() => onClickButton("")}
        >
            <i className="fa-solid fa-plus"></i>
        </button>
    );
}

export { CreateTodoButton };