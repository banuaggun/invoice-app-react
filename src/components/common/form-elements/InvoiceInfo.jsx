import React from "react";
import TableHeader from "../list-elements/table-header/TableHeader";

const InvoiceInfo = ({ title, invoice, onChange, editable = false }) => { 
  const columns = ["Description", "Client Name", clientEmail]
  return (
    <div className="info-block">
      {editable ? (
        <div className="info-form">
          <table className="items-table form-inputs">
            <caption>{title}</caption>
            <TableHeader columns={columns} />
            <tbody>
              <tr>
                <td data-label="description">
                  <input 
                  placeholder="Description"
                    value={invoice.description}
                    onChange={(e) =>
                      onChange({ ...invoice, description: e.target.value })
                    }
                  />
                </td>
                <td data-label="Client Name">
                  <input 
                  placeholder="Client Name"
                    value={invoice.clientName}
                    onChange={(e) =>
                      onChange({ ...invoice, clientName: e.target.value })
                    }
                  />
                </td>
                <td data-label="Client Email">
                  <input 
                  placeholder="Client Email"
                    value={invoice.clientEmail}
                    onChange={(e) =>
                      onChange({ ...invoice, clientEmail: e.target.value })
                    }
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <table className="items-table">
          <caption>{title}</caption>
         <TableHeader columns={columns} />
          <tbody>
            <tr>
              <td data-label="Description">{invoice.description}</td>
              <td data-label="Client Name">{invoice.clientName}</td>
              <td data-label="Client Email">{invoice.clientEmail}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default InvoiceInfo;
