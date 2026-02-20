import React from "react";
import { useNavigate } from "react-router-dom";
import BackIcon from "../../../assets/icons/BackIcon";
import EditIcon from "../../../assets/icons/EditIcon";
import DeleteIcon from "../../../assets/icons/DeleteIcon"; 
import './form-elements.css';

const InvoiceActionButtons = ({
  mode,
  invoiceId,
  onDelete,
  onCancel,
  isEditing,
}) => {
  const navigate = useNavigate();

  return (
    <div className="action-area">
      <div className="action-area-back">
        <button
          className="detail-button back-btn cta-back"
          onClick={() => navigate(-1)}>
          <BackIcon />
          
        </button>
      </div>
      <div className="action-area-edit-delete">
        {mode === "detail" && (
          <>
            <button
              className="detail-button edit-btn"
              onClick={() => navigate(`/invoice/${invoiceId}/edit`)}>
              <EditIcon />
              <span>Edit</span>
            </button>

            <button
              className="detail-button delete-btn"
              onClick={onDelete}>
              <DeleteIcon />
              <span>Delete</span>
            </button>
          </>
        )}

        {(mode === "edit" || mode === "new") && (
          <>
            <button type="submit">{isEditing ? "Update" : "Save"}</button>
            <button type="button" onClick={onCancel}>
              Cancel
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default InvoiceActionButtons;
