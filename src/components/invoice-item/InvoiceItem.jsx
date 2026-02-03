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
              <td data-label="total">{invoice.total}</td>
            </tr>
          </tbody>
        </table>
    );
}

export default InvoiceItem;
