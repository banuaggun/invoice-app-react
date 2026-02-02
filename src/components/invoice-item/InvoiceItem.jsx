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
                More 
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="var(--text-color)" viewBox="0 0 256 256"><path d="M176,128a12,12,0,0,1-5.17,9.87l-52,36A12,12,0,0,1,100,164V92a12,12,0,0,1,18.83-9.87l52,36A12,12,0,0,1,176,128Zm60,0A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"></path></svg>
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
