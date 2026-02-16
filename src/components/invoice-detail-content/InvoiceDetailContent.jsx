import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { formatDate } from "../../utils/dateUtils.js"; 
import AddressBlock from "../address-block/AddressBlock.jsx";
import './detail-content.css';
import InvoiceDetailItem from "../invoice-detail-item/InvoiceDetailItem.jsx";


const InvoiceDetailContent = () => {
  const { id } = useParams();
  const invoices = useSelector((state) => state.invoices.invoices);
  const invoice = invoices.find((inv) => inv.id === id);

  if (!invoice) {
    return <p>Invoice not found.</p>;
  }

  return (
    <div className="detail-content">
      <h2 className="detail-header">Invoice {invoice.id}</h2>

      <div className="area-1">
        <div className="row-1"> 
        
          <p>
            <strong>{invoice.updatedAt ? "Updated At:" : "Created At:"}</strong>{" "}
            {formatDate(invoice.updatedAt || invoice.createdAt)}
          </p>
          <p>
            <strong>Payment Due:</strong> {formatDate(invoice.paymentDue)}
          </p>
          <p>
            <strong>Status:</strong>{" "}
            <span className={`status-badge ${invoice.status}`}>
              {invoice.status}
            </span>
          </p>
        </div>
        <div className="row-2">
          <p>
            <strong>Description:</strong> {invoice.description}
          </p>
          <p>
            <strong>Client:</strong> {invoice.clientName} ({invoice.clientEmail})
          </p>
        </div>
      </div>

      <AddressBlock title="Sender Address" address={invoice.senderAddress} />
      <AddressBlock title="Client Address" address={invoice.clientAddress} /> 

      {invoice.items.map((item, idx) => (
            <InvoiceDetailItem key={idx} item={item} />
          ))}

      <h3 className="detail-header">Total: ${invoice.total}</h3>
    </div>
  );
};

export default InvoiceDetailContent;
