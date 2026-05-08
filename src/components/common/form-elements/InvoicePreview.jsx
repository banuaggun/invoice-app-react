import React from "react";
import TableHeader from "../list-elements/table-header/TableHeader";
import InvoiceTotal from "./InvoiceTotal";

const InvoicePreview = ({ formData }) => { 
  const senderColumns = ["Street", "City", "Post Code", "Country"]; 
  const clientColumns0 = ["Street", "City", "Post Code", "Country"];
  const clientColumns = ["Name", "Email", "Description"];
  const invoiceColumns = ["Payment Terms", "Status"]; 
  const itemColumns = ["Name", "Quantity", "Price", "Total"];
  return (
    <div className="preview"> 
    <div className="preview-table">

    
      <table className="items-table width-100">
        <TableHeader columns={senderColumns} /> 
        <caption>Sender Address</caption> 
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
      <table className="items-table width-100">
        <TableHeader columns={clientColumns0} /> 
        <caption>Client Address</caption> 
        <tbody>
          <tr>
            <td data-label="sender">
              {formData.clientAddress.street}
            </td> 
            <td data-label=" city">
              {formData.clientAddress.city}
            </td> 
            <td data-label="post code">
              {formData.clientAddress.postCode}
            </td> 
            <td data-label="country">
              {formData.clientAddress.country}
            </td>
          </tr>
        </tbody>
      </table>
      <table className="items-table width-100">
        <TableHeader columns={clientColumns} /> 
        <caption>Client Info</caption>
        <tbody>
          <tr>
            <td data-label="client name">{formData.clientName}</td>
            <td data-label="client email">{formData.clientEmail}</td>
            <td data-label="description">{formData.description}</td>
          </tr>
        </tbody>
      </table>
      <table className="items-table width-100">
        <TableHeader columns={invoiceColumns} />
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

      <table className="items-table width-100">
        <caption>Arrangement Items</caption>
        <TableHeader columns={itemColumns} />
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
    </div>
  );
};

export default InvoicePreview;
