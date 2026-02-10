import React from "react";
import { useNavigate } from "react-router-dom"; 
import { formatDate } from "../../utils/dateUtils";
import './invoice-item.css';

function InvoiceItem({ invoice }) {
    const navigate = useNavigate();

const displayDate = invoice.updatedAt || invoice.createdAt;
const formattedDate = formatDate(displayDate, "tr-TR"); 


    return (
        <table>
          
          <tbody>
            <tr>
              <td data-label="id">{invoice.id}</td> 
              <td data-label="customer name">{invoice.clientName}</td> 
              <td data-label="date">{formattedDate}</td> 
              <td data-label="total">${invoice.total}</td> 
              <td className="more-btn" onClick={() => navigate(`/invoice/${invoice.id}`)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="var(--text-color)" viewBox="0 0 256 256"><path d="M141.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L124.69,128,50.34,53.66A8,8,0,0,1,61.66,42.34l80,80A8,8,0,0,1,141.66,133.66Zm80-11.32-80-80a8,8,0,0,0-11.32,11.32L204.69,128l-74.35,74.34a8,8,0,0,0,11.32,11.32l80-80A8,8,0,0,0,221.66,122.34Z"></path></svg>
                <span>More</span> 
              </td>
            </tr>
          </tbody>
        </table>
    );
}

export default InvoiceItem;
