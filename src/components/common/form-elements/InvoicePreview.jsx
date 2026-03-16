import React from "react";
import TableHeader from "../list-elements/table-header/TableHeader";
import InvoiceTotal from "./InvoiceTotal";

const InvoicePreview = ({ formData }) => {
  const columns1 = ["Client Name", "Client Email", "Description"];
  const columns2 = ["Payment Terms", "Status"];
  const columns3 = ["Name", "Quantity", "Price", "Total"];
  return (
    <div className="preview">
      <table className="items-table">
        <caption>Invoice Preview</caption>
        <TableHeader columns={columns1} />
        <tbody>
          <tr>
            <td data-label="client name">{formData.clientName}</td>
            <td data-label="client email">{formData.clientEmail}</td>
            <td data-label="description">{formData.description}</td>
          </tr>
        </tbody>
      </table>
      <table className="items-table">
        <TableHeader columns={columns2} />
        <tbody>
          <tr>
            <td data-label="payment terms">{formData.paymentTerms} days</td>
            <td data-label="status" className="status-area">
              <span className={`status ${formData.status.toLowerCase()}`}>
                {formData.status}
              </span>
            </td>
          </tr>
        </tbody>
      </table>

      <table className="items-table">
        <caption>Arrangement Items</caption>
        <TableHeader columns={columns3} />
        <tbody>
          {formData.items.map((item, idx) => (
            <tr key={idx}>
              <td data-label="name">{item.name}</td>
              <td data-label="quantity">{item.quantity}</td>
              <td data-label="price">{item.price}</td>
              <td data-label="total">{item.total}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <InvoiceTotal total={formData.total} />
    </div>
  );
};

export default InvoicePreview;
