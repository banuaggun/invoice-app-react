import React from "react";
import "./modal.css"; 

const Modal = ({ isOpen, onClose, title, children, actions }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {title && <h2>{title}</h2>}

        <div className="modal-body">
          {children}
        </div>

        <div className="modal-actions">
          {actions}
        </div>

        <button className="modal-close" onClick={onClose}>×</button>
      </div>
    </div>
  );
};

export default Modal;
