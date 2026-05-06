import React from "react";
import TableHeader from "../list-elements/table-header/TableHeader";
import InvoiceTotal from "./InvoiceTotal";

const InvoicePreview = ({ formData }) => { 
  const columns0 = ["Street", "City", "Post Code", "Country"]
  const columns1 = ["Name", "Email", "Description"];
  const columns2 = ["Payment Terms", "Status"]; 
  const columns3 = ["Name", "Quantity", "Price", "Total"];
  return (
    <div className="preview"> 
      <table className="items-table preview-table width-100">
        <TableHeader columns={columns0} /> 
        <caption>Sender</caption> 
        <tbody>
          <tr>
            <td data-label="sender">
              {formData.senderAddress.street}
            </td> 
            <td data-label=" city">
              {formData.senderAddress.city}
            </td> 
            <td data-label="post code">
              {formData.senderAddress.postCode}
            </td> 
            <td data-label="country">
              {formData.senderAddress.country}
            </td>
          </tr>
        </tbody>
      </table>
      <table className="items-table preview-table width-100">
        <TableHeader columns={columns1} /> 
        <caption>Client</caption>
        <tbody>
          <tr>
            <td data-label="client name">{formData.clientName}</td>
            <td data-label="client email">{formData.clientEmail}</td>
            <td data-label="description">{formData.description}</td>
          </tr>
        </tbody>
      </table>
      <table className="items-table preview-table width-100">
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

      <table className="items-table preview-table width-100">
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
