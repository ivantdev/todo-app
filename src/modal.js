import React from "react";
import ReactDOM from "react-dom";

function Modal( { children }) {
    return ReactDOM.createPortal(
        <div className="modal__background">
            {children}
        </div>,
        document.getElementById('modal'),
    );
}

export { Modal };