import React from "react";
import './invoice-item.css';

function InvoiceItem({ invoice }) {
    console.log(invoice);
    return (
        <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
            <h3>{invoice.id}</h3>
            <p>
                <strong>Client:</strong>
                {invoice.clientName}
            </p>
            <p>
                <strong>Email:</strong>
                {invoice.clientEmail}
            </p>
            <p>
                <strong>Description:</strong>
                {invoice.description}
            </p>
            <p>
                <strong>Status:</strong>
                {invoice.status}
            </p>
            <p>
                <strong>Total:</strong>
                ${invoice.total}
            </p>
        </div>
    );
}

export default InvoiceItem;
