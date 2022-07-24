import React from "react";

function CreateTodoButton({ setOpenModal, openModal }) {
    const onClickButton = () => {
        setOpenModal(!openModal);
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