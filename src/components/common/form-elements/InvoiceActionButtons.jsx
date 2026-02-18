import React from "react";
import { useNavigate } from "react-router-dom";
import BackIcon from "../../../assets/icons/BackIcon";
import EditIcon from "../../../assets/icons/EditIcon";
import DeleteIcon from "../../../assets/icons/DEleteIcon";

const InvoiceActionButtons = ({
  mode,
  invoiceId,
  onDelete,
  onCancel,
  isEditing,
}) => {
  const navigate = useNavigate();

  return (
    <div className="top-bar">
      <div>
        <button
          className="detail-button back-btn cta-detail"
          onClick={() => navigate(-1)}>
          <BackIcon />
          <span>Back</span>
        </button>
      </div>
      <div className="actions">
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
