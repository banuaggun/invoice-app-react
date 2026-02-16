import React from "react";
import { formatDate } from "../../utils/dateUtils.js";
import "./invoice-info.css";

const InvoiceInfo = ({ invoice }) => {
  return (
    <div>
    <table> 
        <caption>Invoice Detail <br/> <br/> {invoice.id}</caption>
      <thead>
        <tr>
          <td scope="col">
            {invoice.updatedAt ? "Updated At:" : "Created At:"}
          </td>
          <td scope="col">Payment Due</td>
          <td scope="col">Status</td> 
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
    <table>
      <thead>
        <tr> 
          <td scope="col">Description</td> 
          <td scope="col">Client Name</td> 
          <td scope="col">Client Email</td>
        </tr>
      </thead>
      <tbody>
        <tr>
         
          <td data-label="description">
            {invoice.description}
          </td> 
          <td data-label="Client Name"> 
            {invoice.clientName} 
          </td> 
          <td data-label="Client Email"> 
            {invoice.clientEmail} 
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  );
};

export default InvoiceInfo;
