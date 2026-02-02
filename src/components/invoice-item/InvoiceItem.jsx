import React from "react";
import { useNavigate } from "react-router-dom"; 
import { formatDate } from "../../utils/dateUtils";
import './invoice-item.css';

function InvoiceItem({ invoice }) {
    const navigate = useNavigate();

const displayDate = invoice.updatedAt || invoice.createdAt;
const formattedDate = formatDate(displayDate, "tr-TR"); 


    return (
        <div 
          className="invoice-card" 
          onClick={() => navigate(`/invoice/${invoice.id}`)}
        > 
          <div className="row-1">
              <h3>{invoice.id}</h3> 
              <p>
                Details 
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="var(--text-color)" viewBox="0 0 256 256">
                  <path d="M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"></path>
                </svg>
              </p>
          </div> 

          <div className="row-2">
              <p>{invoice.clientName}</p>
              <p>{formattedDate}</p> 
          </div> 

          <div className="row-3">
              <p>${invoice.total}</p>
              <div className={`status-badge ${invoice.status.toLowerCase()}`}>
                <span className="status-dot"></span>
                <span className="status-text">{invoice.status}</span>
              </div>
          </div>
        </div>
    );
}

export default InvoiceItem;
