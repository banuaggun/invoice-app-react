import React from "react";
import "./modal.css"; 
import "../../index2.css"; 

const Modal = ({ isOpen, onClose, title, children, actions }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay fixed width-100 flex align-center justify-center">
      <div className="modal-content relative">
        {title && <h2>{title}</h2>}

        <div className="modal-body">
          {children}
        </div>

        <div className="modal-actions flex justify-end">
          {actions}
        </div>

        <button className="modal-close absolute cursor-pointer" onClick={onClose}>×</button>
      </div>
    </div>
  );
};

export default Modal;
