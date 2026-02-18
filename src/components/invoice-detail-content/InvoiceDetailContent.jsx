import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import AddressBlock from "../form-elements/address-block/AddressBlock.jsx";
import "./detail-content.css";
import InvoiceDetailItem from "../invoice-detail-item/InvoiceDetailItem.jsx";
import InvoiceInfo from "../form-elements/invoice-info/InvoiceInfo.jsx";
import InvoiceTimeStatus from "../form-elements/invoice-time-status/InvoiceTimeStatus.jsx";

const InvoiceDetailContent = () => {
  const { id } = useParams();
  const invoices = useSelector((state) => state.invoices.invoices);
  const invoice = invoices.find((inv) => inv.id === id);

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
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
      </table>
      {invoice.items.map((item, idx) => (
        <InvoiceDetailItem key={idx} item={item} />
      ))}


      <h3 className="detail-total">Total: ${invoice.total}</h3>
    </div>
  );
};

export default InvoiceDetailContent;
