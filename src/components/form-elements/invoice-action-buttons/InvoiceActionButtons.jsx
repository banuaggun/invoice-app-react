import React from "react";

const InvoiceActionButtons = ({ onCancel, isEditing }) => {
  return (
    <div className="top-bar">
      <button type="button" onClick={onCancel}>← Back</button>
      <div className="actions">
        <button type="submit">{isEditing ? "Update" : "Save"}</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default InvoiceActionButtons;
