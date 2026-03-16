import React from "react";
import { formatDate } from "../../../utils/dateUtils.js";
import "./form-elements.css"; 
import InvoiceOptions from "./InvoiceOptions.jsx";
import TableHeader from "../list-elements/table-header/TableHeader.jsx";

const InvoiceTimeStatus = ({ title, invoice, isFormMode, step, onChange }) => {
  if (isFormMode && step === 4) {
    const columns = ["Payment Terms", "Status"];
    return (
      <div className="form-block">
        <div className="forms">
          <table className="items-table">
            <caption>{title}</caption>
            <TableHeader columns={columns} />
            <tbody>
              <tr>
                <td data-label="Payment Terms">
                  <InvoiceOptions
                    type="paymentTerms"
                    value={invoice.paymentTerms}
                    onChange={onChange}
                  />
                </td>
                <td data-label="status">
                  <span>
                    <InvoiceOptions
                      type="status"
                      value={invoice.status}
                      onChange={onChange}
                    />
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
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
          <td data-label="status badge" className="status-area">
            <span className={`status ${invoice.status.toLowerCase()}`}>
              {invoice.status}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default InvoiceTimeStatus;
