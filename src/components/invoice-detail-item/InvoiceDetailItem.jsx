import React from "react";

const InvoiceDetailItem = ({ item, isFormMode, newItem, onNewItemChange, onAddItem }) => {
  if (isFormMode) {
    // Form görünümü (step 4)
    return (
      <div>
        <h3>Items</h3>
        <div className="item-row">
          <input
            placeholder="Name"
            value={newItem.name}
            onChange={(e) => onNewItemChange("name", e.target.value)}
          />
          <input
            type="number"
            placeholder="Quantity"
            value={newItem.quantity}
            onChange={(e) => onNewItemChange("quantity", Number(e.target.value))}
          />
          <input
            type="number"
            placeholder="Price"
            value={newItem.price}
            onChange={(e) => onNewItemChange("price", Number(e.target.value))}
          />
          <span>Total: {newItem.total}</span>
        </div>
        <button type="button" onClick={onAddItem}>
          Add Item
        </button>
      </div>
    );
  }

  // Normal görünüm (detail mode)
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
