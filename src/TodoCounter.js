import React from "react";

function TodoCounter() {
    return  (
        <React.Fragment>
            <h2 className="main__count">3 tasks</h2>
            <h2 className="main__count">0 completed</h2>
        </React.Fragment>
    )
}

export { TodoCounter };