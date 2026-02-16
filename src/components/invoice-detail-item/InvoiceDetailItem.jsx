import React from "react";

const InvoiceDetailItem = ({ item }) => {
  return (
    <table> 
        
        <tbody>
    <tr>
      <td data-label="name">{item.name}</td>
      <td data-label="quantity">{item.quantity}</td>
      <td data-label="price">${item.price}</td>
      <td data-label="total">${item.total}</td>
    </tr>
    </tbody>
    </table>
  );
};

export default InvoiceDetailItem;
