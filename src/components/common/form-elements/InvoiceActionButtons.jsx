import React from "react";
import { useNavigate } from "react-router-dom";
import BackIcon from "../../../assets/icons/BackIcon";
import EditIcon from "../../../assets/icons/EditIcon";
import DeleteIcon from "../../../assets/icons/DeleteIcon";
import "./form-elements.css"; 
import "../../../index2.css";
import PrintInvoiceButton from "./PrintInvoiceButton";

const InvoiceActionButtons = ({
  mode,
  invoiceId,
  onDelete,
  onCancel,
  isEditing,
}) => {
  const navigate = useNavigate();

  return (
    <div className="action-area d-flex flex-row justify-between align-start fixed">
      {mode === "detail" && (
        <div>
          <button className="btn-back cta-back flex justify-center align-center" onClick={() => navigate(-1)}>
            <BackIcon />
          </button>
        </div>
      )}
      {mode === "detail" && (
        <div className="btn-actions flex justify-end align-center"> 
        <PrintInvoiceButton/>
          <button
            className="btn-detail btn-edit flex justify-center align-center"
            onClick={() => navigate(`/invoice/${invoiceId}/edit`)}>
            <EditIcon />
            <span className="btn-detail-text">Edit</span>
          </button>

          <button className="btn-detail btn-delete flex justify-center align-center" onClick={onDelete}>
            <DeleteIcon />
            <span className="btn-detail-text">Delete</span>
          </button>
        </div>
      )}

      {(mode === "edit" || mode === "new") && (
        <div className="btn-actions flex justify-end align-center">
          <button className="btn-detail btn-s-u flex justify-center align-center" type="submit">
            <span className="btn-detail-text">
              {isEditing ? "Update" : "Save"}
            </span>
          </button>
          <button
            className="btn-detail btn-delete flex justify-center align-center"
            type="button"
            onClick={onCancel}>
            <span className="btn-detail-text">Cancel</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default InvoiceActionButtons;
