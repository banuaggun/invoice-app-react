import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteInvoice } from "../../features/invoiceSlice";
import "./detail.css";
import Modal from "../../components/modals/Modal.jsx";
import InvoiceDetailContent from "../../components/invoice-detail-content/InvoiceDetailContent.jsx";
import InvoiceActionButtons from "../../components/common/form-elements/InvoiceActionButtons.jsx";

const InvoiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const invoices = useSelector((state) => state.invoices.invoices);
  const invoice = invoices.find((inv) => inv.id === id);

  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!invoice) {
    return <p>Invoice not found.</p>;
  }

  const handleDelete = () => {
    dispatch(deleteInvoice(invoice.id));
    navigate("/");
  };

  return (
    <div className="invoice-detail">
      <div className="invoice-detail-topbar">
        <InvoiceActionButtons
          mode="detail"
          invoiceId={invoice.id}
          onDelete={() => setIsModalOpen(true)}
        />
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Delete Invoice"
        actions={
          <>
            <button onClick={() => setIsModalOpen(false)}>Cancel</button>
            <button onClick={handleDelete}>Confirm</button>
          </>
        }>
        <p>
          Are you sure you want to delete invoice <strong>{invoice.id}</strong>?
        </p>
      </Modal>

      <InvoiceDetailContent />
    </div>
  );
};

export default InvoiceDetail;
