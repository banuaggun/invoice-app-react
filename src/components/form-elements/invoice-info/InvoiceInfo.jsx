import React from "react";

const InvoiceInfo = ({ invoice, onChange, editable = false }) => {
  return (
    <div>
     
    <table>
      <thead>
        <tr> 
          <th scope="col">Description</th> 
          <th scope="col">Client Name</th> 
          <th scope="col">Client Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
         
          <td data-label="description">
             {editable ? (
                <input value={invoice.description} onChange={(e) =>
                    onChange({ ...invoice, description: e.target.value })
                  }
                />
              ) : (
                invoice.description
              )}
          </td> 
          <td data-label="Client Name"> 
           {editable ? (
                <input value={invoice.clientName} onChange={(e) =>
                    onChange({ ...invoice, clientName: e.target.value })
                  }
                />
              ) : (
                invoice.clientName
              )}
          </td> 
          <td data-label="Client Email"> 
            {editable ? (
                <input value={invoice.clientEmail} onChange={(e) =>
                    onChange({ ...invoice, clientEmail: e.target.value })
                  }
                />
              ) : (
                invoice.clientEmail
              )}
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  );
};

export default InvoiceInfo;
