import React from "react";

function TodoHeader() {
    return(
        <div className="header__container">
            <h2>My tasks</h2>
            <div className="header__img">
                <i className="fa-duotone fa-user-astronaut"></i>
            </div>
        </div>
    );
}

export { TodoHeader }