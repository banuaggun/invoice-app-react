import React from "react";
import { formatDate } from "../../../utils/dateUtils.js"; 
import './form-elements.css'; 

const InvoiceTimeStatus = ({ invoice }) => {
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
