import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteInvoice } from "../../features/invoiceSlice";
import { formatDate } from "../../utils/dateUtils.js";
import "./detail.css";
import Modal from "../../components/modals/Modal.jsx";

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
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>
        <div className="actions">
          <button
            className="edit-btn"
            onClick={() => navigate(`/invoice/${invoice.id}/edit`)}>
            Edit
          </button>

          <button className="delete-btn" onClick={() => setIsModalOpen(true)}>
            Delete
          </button>
        </div>
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

      <h2>Invoice {invoice.id}</h2>
      <div className="area-1">
        <div className="row-1">
          <p>
            <strong>{invoice.updatedAt ? "Updated At:" : "Created At:"}</strong>{" "}
            {formatDate(invoice.updatedAt || invoice.createdAt)}
          </p>
          <p>
            <strong>Payment Due:</strong> {formatDate(invoice.paymentDue)}
          </p>
          <p>
            <strong>Status:</strong> {invoice.status}
          </p>
        </div>
        <div className="row-2">
          <p>
            <strong>Description:</strong> {invoice.description}
          </p>
          <p>
            <strong>Client:</strong> {invoice.clientName} ({invoice.clientEmail}
            )
          </p>
        </div>
      </div>

      <h3>Sender Address</h3>
      <p>
        {invoice.senderAddress.street}, {invoice.senderAddress.city},{" "}
        {invoice.senderAddress.postCode}, {invoice.senderAddress.country}
      </p>

      <h3>Client Address</h3>
      <p>
        {invoice.clientAddress.street}, {invoice.clientAddress.city},{" "}
        {invoice.clientAddress.postCode}, {invoice.clientAddress.country}
      </p>

      <h3>Items</h3>
      <ul>
        {invoice.items.map((item, idx) => (
          <li key={idx}>
            {item.name} — {item.quantity} × ${item.price} = ${item.total}
          </li>
        ))}
      </ul>

      <h3>Total: ${invoice.total}</h3>
    </div>
  );
};

export default InvoiceDetail;
