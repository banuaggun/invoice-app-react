import React from "react";
import "./form-elements.css";
import TableHeader from "../list-elements/table-header/TableHeader";

const InvoiceTotal = ({ invoice, total, isFormMode = false }) => {
  const grandTotal = total ?? invoice?.total ?? 0; 

  const columns = ["Grand Total"];

  if (isFormMode) {
    return (
      <div className="form-total">
        <table className="items-table"> 
          <TableHeader columns={columns} />
          
          <tbody>
            <tr>
              <td data-label="grand total">${grandTotal}</td>
            </tr>
          </tbody>
        </table>
       
      </div>
    );
  }

  return (
    <div className="form-total">
      <table className="items-table form-total-web flex-sm justify-between-sm">
        <TableHeader columns={columns} />
        <tbody>
          <tr>
            <td data-label="total">${grandTotal}</td>
          </tr>
        </tbody>
      </table>
     
    </div>
  );
};

export default InvoiceTotal;
