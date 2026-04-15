import React from "react";
import TableHeader from "../list-elements/table-header/TableHeader";

const InvoiceDetailItem = ({
  title,
  item,
  isFormMode,
  newItem,
  onNewItemChange,
  onAddItem,
}) => {
  const columns = ["Item Name", "Quantity", "Price", "Total", ""];
  if (isFormMode) {
    // Form görünümü (step 5)
    return (
      <div className="form-block width-100">
        <div className="forms">
          <table className="items-table">
            <caption>{title}</caption>
            <TableHeader columns={columns} />
            <tbody>
              <tr>
                <td data-label="Item Name">
                  <input
                    className="width-100 hover-cursor-pointer outline-none"
                    placeholder="Name"
                    value={newItem.name}
                    onChange={(e) => onNewItemChange("name", e.target.value)}
                  />
                </td>
                <td data-label="Quantity">
                  <input
                    className="width-100 hover-cursor-pointer outline-none"
                    type="number"
                    placeholder="Quantity"
                    value={newItem.quantity}
                    onChange={(e) =>
                      onNewItemChange("quantity", Number(e.target.value))
                    }
                  />
                </td>
                <td data-label="Price">
                  <input
                    className="width-100 hover-cursor-pointer outline-none"
                    type="number"
                    placeholder="Price"
                    value={newItem.price}
                    onChange={(e) =>
                      onNewItemChange("price", Number(e.target.value))
                    }
                  />
                </td>
                <td data-label="Total">{newItem.total}</td>
                <td className="item-btn">
                  <button
                    className="btn-detail btn-add flex justify-center align-center hover-cursor-pointer active-cursor-pointer focus-cursor-pointer outline-none"
                    type="button"
                    onClick={onAddItem}>
                    <span className="btn-detail-text width-100">Add Item</span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // Normal görünüm (detail mode)
  return (
    <table className="items-table">
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
