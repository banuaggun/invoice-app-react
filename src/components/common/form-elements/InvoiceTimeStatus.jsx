import React from "react";
import { formatDate } from "../../../utils/dateUtils.js"; 
import './form-elements.css'; 

const InvoiceTimeStatus = ({ invoice, isFormMode, step, onChange }) => {
  if (isFormMode && step === 3) {
    return (
      <div className="invoice-details-form">
        <h3>Invoice Details</h3>
        <select
          value={invoice.paymentTerms}
          onChange={(e) => onChange("paymentTerms", Number(e.target.value))}
        >
          <option value={1}>1 day</option>
          <option value={7}>7 days</option>
          <option value={30}>30 days</option>
        </select>

        <select
          value={invoice.status}
          onChange={(e) => onChange("status", e.target.value)}
        >
          <option value="draft">Draft</option>
          <option value="pending">Pending</option>
          <option value="paid">Paid</option>
        </select>
      </div>
    );
  }

  return (
    <table>
      <caption>
        Invoice Detail <br /> <br /> {invoice.id}
      </caption>
      <thead>
        <tr>
          <th scope="col">
            {invoice.updatedAt ? "Updated At:" : "Created At:"}
          </th>
          <th scope="col">Payment Due</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-label="Created At">
            {formatDate(invoice.updatedAt || invoice.createdAt)}
          </td>
          <td data-label="Payment Due">{formatDate(invoice.paymentDue)}</td>
          <td data-label="status badge">
            <span className={`status-badge ${invoice.status}`}>
              {invoice.status}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default InvoiceTimeStatus;
