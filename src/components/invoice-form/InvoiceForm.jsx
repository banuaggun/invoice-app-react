import React, { useState } from "react";
import "./invoice-form.css";
import AddressBlock from "../form-elements/address-block/AddressBlock";
import InvoiceInfo from "../form-elements/invoice-info/InvoiceInfo";
import InvoiceActionButtons from "../form-elements/invoice-action-buttons/InvoiceActionButtons";

const InvoiceForm = ({ initialData = {}, onSubmit, onCancel }) => {
  const [step, setStep] = useState(1);
  const [showPreview, setShowPreview] = useState(false);

  const [formData, setFormData] = useState({
    description: initialData.description || "",
    paymentTerms: initialData.paymentTerms || 30,
    clientName: initialData.clientName || "",
    clientEmail: initialData.clientEmail || "",
    status: initialData.status || "draft",
    senderAddress: initialData.senderAddress || {
      street: "",
      city: "",
      postCode: "",
      country: "",
    },
    clientAddress: initialData.clientAddress || {
      street: "",
      city: "",
      postCode: "",
      country: "",
    },
    items: initialData.items || [],
    total: initialData.total || 0,
  });

  const [newItem, setNewItem] = useState({
    name: "",
    quantity: 1,
    price: 0,
    total: 0,
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleNewItemChange = (field, value) => {
    const updated = { ...newItem, [field]: value };
    if (field === "quantity" || field === "price") {
      updated.total = updated.quantity * updated.price;
    }
    setNewItem(updated);
  };

  const addItem = () => {
    if (!newItem.name) return;
    const updatedItems = [...formData.items, newItem];
    setFormData({
      ...formData,
      items: updatedItems,
      total: updatedItems.reduce((sum, i) => sum + i.total, 0),
    });
    setNewItem({ name: "", quantity: 1, price: 0, total: 0 });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const generateId = () => {
      const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const randomLetters =
        letters[Math.floor(Math.random() * letters.length)] +
        letters[Math.floor(Math.random() * letters.length)];
      const randomNumbers = Math.floor(1000 + Math.random() * 9000);
      return randomLetters + randomNumbers;
    };

    const today = new Date();
    const createdAt = initialData.id
      ? initialData.createdAt
      : today.toISOString().split("T")[0];
    const paymentDueDate = new Date(today);
    paymentDueDate.setDate(paymentDueDate.getDate() + formData.paymentTerms);
    const paymentDue = paymentDueDate.toISOString().split("T")[0];

    const invoiceData = {
      ...formData,
      id: initialData.id || generateId(),
      createdAt,
      paymentDue,
      updatedAt: initialData.id ? today.toISOString().split("T")[0] : undefined,
    };

    onSubmit(invoiceData);
  };

  return (
    <form className="invoice-form" onSubmit={handleSubmit}>
      <InvoiceActionButtons
        onCancel={onCancel}
        isEditing={!!initialData.id}
        mode={initialData.id ? "edit" : "new"}
      />

      {step === 1 && (
        <div>
          <AddressBlock
            title="Sender Address"
            address={formData.senderAddress}
            editable={true}
            onChange={(updated) =>
              setFormData({ ...formData, senderAddress: updated })
            }
          />
          <AddressBlock
            title="Client Address"
            address={formData.clientAddress}
            editable={true}
            onChange={(updated) =>
              setFormData({ ...formData, clientAddress: updated })
            }
          />
        </div>
      )}

      {step === 2 && (
        <InvoiceInfo
          invoice={formData}
          editable={true}
          onChange={(updated) => setFormData(updated)}
        />
      )}

      {step === 3 && (
        <div>
          <h3>Invoice Details</h3>
          <input
            placeholder="Description"
            value={formData.description}
            onChange={(e) => handleChange("description", e.target.value)}
          />
          <select
            value={formData.paymentTerms}
            onChange={(e) =>
              handleChange("paymentTerms", Number(e.target.value))
            }>
            <option value={1}>1 day</option>
            <option value={7}>7 days</option>
            <option value={30}>30 days</option>
          </select>
          <select
            value={formData.status}
            onChange={(e) => handleChange("status", e.target.value)}>
            <option value="draft">Draft</option>
            <option value="pending">Pending</option>
            <option value="paid">Paid</option>
          </select>
        </div>
      )}

      {step === 4 && (
        <div>
          <h3>Items</h3>
          <div className="item-row">
            <input
              placeholder="Name"
              value={newItem.name}
              onChange={(e) => handleNewItemChange("name", e.target.value)}
            />
            <input
              type="number"
              placeholder="Quantity"
              value={newItem.quantity}
              onChange={(e) =>
                handleNewItemChange("quantity", Number(e.target.value))
              }
            />
            <input
              type="number"
              placeholder="Price"
              value={newItem.price}
              onChange={(e) =>
                handleNewItemChange("price", Number(e.target.value))
              }
            />
            <span>Total: {newItem.total}</span>
          </div>
          <button type="button" onClick={addItem}>
            Add Item
          </button>
          {formData.items.length > 0 && (
            <ul className="item-list">
              {formData.items.map((item, idx) => (
                <li key={idx}>
                  {item.name} — {item.quantity} × ${item.price} = ${item.total}
                </li>
              ))}
            </ul>
          )}
          <h4>Grand Total: {formData.total}</h4>
        </div>
      )}

      <div className="pagination">
        {step > 1 && (
          <button type="button" onClick={() => setStep(step - 1)}>
            Previous
          </button>
        )}
        {step < 4 && (
          <button type="button" onClick={() => setStep(step + 1)}>
            Next
          </button>
        )}
        {step === 4 && (
          <button type="button" onClick={() => setShowPreview(!showPreview)}>
            {showPreview ? "Preview Close" : "Preview"}
          </button>
        )}
      </div>

      {showPreview && (
        <div className="preview">
          <h3>Invoice Preview</h3>
          <p>
            <strong>Client:</strong> {formData.clientName} (
            {formData.clientEmail})
          </p>
          <p>
            <strong>Description:</strong> {formData.description}
          </p>
          <p>
            <strong>Status:</strong> {formData.status}
          </p>
          <p>
            <strong>Payment Terms:</strong> {formData.paymentTerms} days
          </p>
          <h4>Items</h4>
          <ul>
            {formData.items.map((item, idx) => (
              <li key={idx}>
                {item.name} — {item.quantity} × ${item.price} = ${item.total}
              </li>
            ))}
          </ul>
          <h4>Grand Total: ${formData.total}</h4>
        </div>
      )}
    </form>
  );
};

export default InvoiceForm;
