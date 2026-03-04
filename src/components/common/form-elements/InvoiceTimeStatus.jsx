import React from "react";
import { formatDate } from "../../../utils/dateUtils.js";
import "./form-elements.css";

const InvoiceTimeStatus = ({ title, invoice, isFormMode, step, onChange }) => {
  if (isFormMode && step === 3) {
    return (
      <table className="items-table">
        <caption>{title}</caption>
        <thead>
          <tr>
            <th scope="col">Payment Terms</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Payment Terms">
              <select
                value={invoice.paymentTerms}
                onChange={(e) =>
                  onChange("paymentTerms", Number(e.target.value))
                }>
                <option value={1}>1 day</option>
                <option value={7}>7 days</option>
                <option value={30}>30 days</option>
              </select>
            </td>
            <td data-label="status">
              <select
                value={invoice.status}
                onChange={(e) => onChange("status", e.target.value)}>
                <option value="draft">Draft</option>
                <option value="pending">Pending</option>
                <option value="paid">Paid</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }

  return (
    <table>
      <caption>
        <span>{invoice.id}</span> Invoice Detail
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
