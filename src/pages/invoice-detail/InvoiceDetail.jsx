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
        <button className="detail-button back-btn" onClick={() => navigate(-1)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M205.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L131.31,128ZM51.31,128l74.35-74.34a8,8,0,0,0-11.32-11.32l-80,80a8,8,0,0,0,0,11.32l80,80a8,8,0,0,0,11.32-11.32Z"></path></svg> 
          <span>Back</span>
        </button>
        <div className="actions">
          <button
            className="detail-button edit-btn"
            onClick={() => navigate(`/invoice/${invoice.id}/edit`)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M227.32,73.37,182.63,28.69a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H216a8,8,0,0,0,0-16H115.32l112-112A16,16,0,0,0,227.32,73.37ZM136,75.31,152.69,92,68,176.69,51.31,160ZM48,208V179.31L76.69,208Zm48-3.31L79.32,188,164,103.31,180.69,120Zm96-96L147.32,64l24-24L216,84.69Z"></path></svg> 
            <span>Edit</span>
          </button>

          <button className="detail-button delete-btn" onClick={() => setIsModalOpen(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path></svg> 
            <span>Delete</span>
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

      <h2 className="detail-header">Invoice {invoice.id}</h2>
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

      <h3 className="detail-header">Sender Address</h3>
      <p>
        {invoice.senderAddress.street}, {invoice.senderAddress.city},{" "}
        {invoice.senderAddress.postCode}, {invoice.senderAddress.country}
      </p>

      <h3 className="detail-header">Client Address</h3>
      <p>
        {invoice.clientAddress.street}, {invoice.clientAddress.city},{" "}
        {invoice.clientAddress.postCode}, {invoice.clientAddress.country}
      </p>

      <h3 className="detail-header">Items</h3>
      <ul>
        {invoice.items.map((item, idx) => (
          <li key={idx}>
            {item.name} — {item.quantity} × ${item.price} = ${item.total}
          </li>
        ))}
      </ul>

      <h3 className="detail-header">Total: ${invoice.total}</h3>
    </div>
  );
};

export default InvoiceDetail;
