import React from "react";
import { useNavigate } from "react-router-dom";
import './invoice-item.css';

function InvoiceItem({ invoice }) {
    const navigate = useNavigate();

    return (
        <div
            style={{ border: "1px solid #ccc", margin: "10px", padding: "10px", cursor: "pointer" }}
            onClick={() => navigate(`/invoice/${invoice.id}`)} // 👈 yönlendirme
        >
            <h3>{invoice.id}</h3>
            <p>{invoice.createdAt}</p>
            <p><strong>Client:</strong> {invoice.clientName}</p>
            <p><strong>Total:</strong> ${invoice.total}</p>
            <p><strong>Status:</strong> {invoice.status}</p>
        </div>
    );
}

export default InvoiceItem;
