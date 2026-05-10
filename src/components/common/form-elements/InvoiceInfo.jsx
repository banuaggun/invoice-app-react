import React, {useState} from "react";
import TableHeader from "../list-elements/table-header/TableHeader"; 


const InvoiceInfo = ({ title, invoice, onChange, editable = false }) => {
  const columns = ["Description", "Client Name", "Client Email"]; 

   const [emailError, setEmailError] = useState(""); // yeni state

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  return (
    <div className="form-block width-100">
      {editable ? (
        <div className="forms">
          <table className="items-table">
            <caption>{title}</caption>
            <TableHeader columns={columns} />
            <tbody>
              <tr>
                <td data-label="description">
                  <input
                    className="width-100 hover-cursor-pointer outline-none"
                    placeholder="Description"
                    value={invoice.description}
                    onChange={(e) =>
                      onChange({ ...invoice, description: e.target.value })
                    }
                  />
                </td>
                <td data-label="Client Name">
                  <input
                    className="width-100 hover-cursor-pointer outline-none"
                    placeholder="Client Name"
                    value={invoice.clientName}
                    onChange={(e) =>
                      onChange({ ...invoice, clientName: e.target.value })
                    }
                  />
                </td>
                <td data-label="Client Email">
                  <input
                    className="width-100 hover-cursor-pointer outline-none"
                    placeholder="Client Email"
                    value={invoice.clientEmail}
                     onChange={(e) => {
                      const value = e.target.value;
                      onChange({ ...invoice, clientEmail: value });
                      if (!validateEmail(value)) {
                        setEmailError("Geçerli bir e‑mail adresi girin.");
                      } else {
                        setEmailError("");
                      }
                    }}
                  /> 
                   {emailError && (
                    <span className="error-text">{emailError}</span>
                  )}
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
