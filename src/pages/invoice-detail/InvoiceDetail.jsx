import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux"; 
import './invoice-detail.css'; 

const InvoiceDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const invoices = useSelector((state) => state.invoices.invoices);
    const invoice = invoices.find((inv) => inv.id === id);

    if (!invoice) {
        return <p>Invoice not found.</p>;
    }

    return (
        <div className="invoice-detail">
            {/* Üst bar */}
            <div className="invoice-detail-topbar">
                <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
                <div className="actions">
                    <button className="edit-btn">Edit</button>
                    <button className="delete-btn">Delete</button>
                </div>
            </div>

            {/* Detay içerik */}
            <h2>Invoice {invoice.id}</h2>
            <p><strong>Created At:</strong> {invoice.createdAt}</p>
            <p><strong>Payment Due:</strong> {invoice.paymentDue}</p>
            <p><strong>Description:</strong> {invoice.description}</p>
            <p><strong>Client:</strong> {invoice.clientName} ({invoice.clientEmail})</p>
            <p><strong>Status:</strong> {invoice.status}</p>

            <h3>Sender Address</h3>
            <p>{invoice.senderAddress.street}, {invoice.senderAddress.city}, {invoice.senderAddress.postCode}, {invoice.senderAddress.country}</p>

            <h3>Client Address</h3>
            <p>{invoice.clientAddress.street}, {invoice.clientAddress.city}, {invoice.clientAddress.postCode}, {invoice.clientAddress.country}</p>

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
