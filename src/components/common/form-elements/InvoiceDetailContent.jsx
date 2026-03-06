import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import AddressBlock from "./AddressBlock.jsx";
import "./form-elements.css";
import InvoiceDetailItem from "./InvoiceDetailItem.jsx";
import InvoiceInfo from "./InvoiceInfo.jsx";
import InvoiceTimeStatus from "./InvoiceTimeStatus.jsx";
import TableHeader from "../list-elements/table-header/TableHeader.jsx";

const InvoiceDetailContent = () => {
  const { id } = useParams();
  const invoices = useSelector((state) => state.invoices.invoices);
  const invoice = invoices.find((inv) => inv.id === id); 

  const columns = ["Item", "Quantity", "Price", "Total"];

  if (!invoice) {
    return <p>Invoice not found.</p>;
  }

  return (
    <div className="detail-content">
      <InvoiceTimeStatus invoice={invoice} />
      <InvoiceInfo invoice={invoice} />

      <AddressBlock title="Sender Address" address={invoice.senderAddress} />
      <AddressBlock title="Client Address" address={invoice.clientAddress} />

      <table>
        <caption>Items</caption>
        <TableHeader columns={columns} />
      </table>
      {invoice.items.map((item, idx) => (
        <InvoiceDetailItem key={idx} item={item} isFormMode={false} />
      ))}

      <table className="mobile-total">
        <thead>
          <tr>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Total">{invoice.total}</td>
          </tr>
        </tbody>
      </table>
      <div className="web-total-table">
        <table>
          <tr>
            <th>Total: </th>
            <td>${invoice.total}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default InvoiceDetailContent;
