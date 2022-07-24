import React from "react";
import { TodoContext } from "./TodoContext";

function TodoForm() {
    const icons = {
        "high": <i className="fa-duotone fa-fire"></i>,
        "medium": <i className="fa-duotone fa-thumbs-up"></i>,
        "low": <i className="fa-solid fa-temperature-empty"></i>
    };
    const [ newTodoValue, setNewTodoValue ] = React.useState("");
    const [ newPriority, setNewPriority ] = React.useState("high");
    const [ currentIcon, setCurrentIcon ] = React.useState(icons["high"]);

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onChangeText = (event) => {
        setNewTodoValue(event.target.value);
    };
    const onChangeSelect = (event) => {
        setNewPriority(event.target.value);
        setCurrentIcon(icons[event.target.value]);
        console.log('updating icon...');
    };

    const onCancel = () => {
        setOpenModal(false);
    };
    const onAdd = (event) => {
        event.preventDefault();
        if(newTodoValue !== "") {
            addTodo(newTodoValue, newPriority);
            setOpenModal(false);
        }
    };
    return (
        <div className="modal__blur">
            <form className="modal__form" onSubmit={onAdd}>
                <h2 className="form__title">Create</h2>
                <div className={"form__select-container " + newPriority } id="selectContainer">
                    <label htmlFor="select" className="select__label">Priority</label>
                    <div className={"select__icon " + newPriority } id="iconPriority">
                        { currentIcon }
                    </div>
                    <select onChange={onChangeSelect} id="select" className="select__select">
                        <option value="high" defaultValue={"selected"}>High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </div>

                <textarea className="form__text" value={newTodoValue} onChange={onChangeText} placeholder="Add description"></textarea>

                <div className="form__buttons">
                    <button
                        className="buttons__cancel"
                        onClick={onCancel}
                        type="button"
                    >
                        Cancel
                    </button>

                    <button
                        className="buttons__submit"
                        type="submit"
                    >
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
}

export { TodoForm };