import React from "react";

function TodoCounter( {total, completed} ) {
    return  (
        <React.Fragment>
            <h2 className="main__count">{total} tasks</h2>
            <h2 className="main__count">{completed} completed</h2>
        </React.Fragment>
    )
}

export { TodoCounter };