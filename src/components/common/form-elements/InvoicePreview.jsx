import React from "react";

const InvoicePreview = ({ formData }) => {
  return (
    <div className="preview">
      <h3>Invoice Preview</h3>
      <p>
        <strong>Client:</strong> {formData.clientName} ({formData.clientEmail})
      </p>
      <p>
        <strong>Description:</strong> {formData.description}
      </p>
      <p>
        <strong>Status:</strong> {formData.status}
      </p>
      <p>
        <strong>Payment Terms:</strong> {formData.paymentTerms} days
      </p>
      <h4>Items</h4>
      <ul>
        {formData.items.map((item, idx) => (
          <li key={idx}>
            {item.name} — {item.quantity} × ${item.price} = ${item.total}
          </li>
        ))}
      </ul>
      <h4>Grand Total: ${formData.total}</h4>
    </div>
  );
};

export default InvoicePreview;
