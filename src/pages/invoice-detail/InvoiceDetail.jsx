import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteInvoice } from "../../features/invoiceSlice";
import { formatDate } from "../../utils/dateUtils.js";
import "./detail.css";
import Modal from "../../components/modals/Modal.jsx";

const InvoiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const invoices = useSelector((state) => state.invoices.invoices);
  const invoice = invoices.find((inv) => inv.id === id);

  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!invoice) {
    return <p>Invoice not found.</p>;
  }

  const handleDelete = () => {
    dispatch(deleteInvoice(invoice.id));
    navigate("/");
  };

  return (
    <div className="invoice-detail">
      <div className="invoice-detail-topbar">
        <button
          className="detail-button back-btn cta-detail"
          onClick={() => navigate(-1)}>
          <span>
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 66 43"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <g
                id="arrow"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd">
                <path
                  class="one"
                  d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                  fill="var(--text-color)"></path>
                <path
                  class="two"
                  d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                  fill="var(--text-color)"></path>
                <path
                  class="three"
                  d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                  fill="var(--text-color)"></path>
              </g>
            </svg>
          </span>
          <span>Back</span>
        </button>
        <div className="actions">
          <button
            className="detail-button edit-btn"
            onClick={() => navigate(`/invoice/${invoice.id}/edit`)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#000000"
              viewBox="0 0 256 256">
              <path d="M227.32,73.37,182.63,28.69a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H216a8,8,0,0,0,0-16H115.32l112-112A16,16,0,0,0,227.32,73.37ZM136,75.31,152.69,92,68,176.69,51.31,160ZM48,208V179.31L76.69,208Zm48-3.31L79.32,188,164,103.31,180.69,120Zm96-96L147.32,64l24-24L216,84.69Z"></path>
            </svg>
            <span>Edit</span>
          </button>

          <button
            className="detail-button delete-btn"
            onClick={() => setIsModalOpen(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#000000"
              viewBox="0 0 256 256">
              <path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path>
            </svg>
            <span>Delete</span>
          </button>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Delete Invoice"
        actions={
          <>
            <button onClick={() => setIsModalOpen(false)}>Cancel</button>
            <button onClick={handleDelete}>Confirm</button>
          </>
        }>
        <p>
          Are you sure you want to delete invoice <strong>{invoice.id}</strong>?
        </p>
      </Modal>

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
            <strong>Status:</strong> {invoice.status}
          </p>
        </div>
        <div className="row-2">
          <p>
            <strong>Description:</strong> {invoice.description}
          </p>
          <p>
            <strong>Client:</strong> {invoice.clientName} ({invoice.clientEmail}
            )
          </p>
        </div>
      </div>

      <h3 className="detail-header">Sender Address</h3>
      <p>
        {invoice.senderAddress.street}, {invoice.senderAddress.city},{" "}
        {invoice.senderAddress.postCode}, {invoice.senderAddress.country}
      </p>

      <h3 className="detail-header">Client Address</h3>
      <p>
        {invoice.clientAddress.street}, {invoice.clientAddress.city},{" "}
        {invoice.clientAddress.postCode}, {invoice.clientAddress.country}
      </p>

      <h3 className="detail-header">Items</h3>
      <ul>
        {invoice.items.map((item, idx) => (
          <li key={idx}>
            {item.name} — {item.quantity} × ${item.price} = ${item.total}
          </li>
        ))}
      </ul>

      <h3 className="detail-header">Total: ${invoice.total}</h3>
    </div>
  );
};

export default InvoiceDetail;
