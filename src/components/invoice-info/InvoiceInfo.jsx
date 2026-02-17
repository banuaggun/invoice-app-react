import React from "react";
import { formatDate } from "../../utils/dateUtils.js";
import "./invoice-info.css";

const InvoiceInfo = ({ invoice, onChange, editable = false }) => {
  return (
    <div>
    <table> 
        <caption>Invoice Detail <br/> <br/> {invoice.id}</caption>
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
    <table>
      <thead>
        <tr> 
          <th scope="col">Description</th> 
          <th scope="col">Client Name</th> 
          <th scope="col">Client Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
         
          <td data-label="description">
             {editable ? (
                <input value={invoice.description} onChange={(e) =>
                    onChange({ ...invoice, description: e.target.value })
                  }
                />
              ) : (
                invoice.description
              )}
          </td> 
          <td data-label="Client Name"> 
           {editable ? (
                <input value={invoice.clientName} onChange={(e) =>
                    onChange({ ...invoice, clientName: e.target.value })
                  }
                />
              ) : (
                invoice.clientName
              )}
          </td> 
          <td data-label="Client Email"> 
            {editable ? (
                <input value={invoice.clientEmail} onChange={(e) =>
                    onChange({ ...invoice, clientEmail: e.target.value })
                  }
                />
              ) : (
                invoice.clientEmail
              )}
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  );
};

export default InvoiceInfo;
