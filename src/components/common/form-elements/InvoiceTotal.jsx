import React from "react";
import "./form-elements.css";

const InvoiceTotal = ({ invoice, total, isFormMode = false }) => {
  const grandTotal = total ?? invoice?.total ?? 0;

  if (isFormMode) {
    return (
      <div className="form-total">
        <table className="form-total-mobile">
          <thead>
            <tr>
              <th scope="col">Grand Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="grand total">${grandTotal}</td>
            </tr>
          </tbody>
        </table>
        <div className="form-total-web">
          <table>
            <tr>
              <td className="total-web-head">Grand Total</td>
              <td data-label="grand total">${grandTotal}</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }

  return (
    <div className="form-total">
      <table className="form-total-mobile">
        <thead>
          <tr>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="total">${grandTotal}</td>
          </tr>
        </tbody>
      </table>
      <div className="form-total-web">
        <table>
          <tr>
            <td className="total-web-head">Total</td>
            <td data-label="grand total">${grandTotal}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default InvoiceTotal;
