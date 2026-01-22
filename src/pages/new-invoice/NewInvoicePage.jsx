import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addInvoice } from "../../features/invoiceSlice";
import "./new-invoice.css";

const NewInvoicePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [step, setStep] = useState(1);
  const [dirty, setDirty] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const [formData, setFormData] = useState({
    description: "",
    paymentTerms: 30,
    clientName: "",
    clientEmail: "",
    status: "draft",
    senderAddress: { street: "", city: "", postCode: "", country: "" },
    clientAddress: { street: "", city: "", postCode: "", country: "" },
    items: [],
    total: 0,
  });

  const [newItem, setNewItem] = useState({
    name: "",
    quantity: 1,
    price: 0,
    total: 0,
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    setDirty(true);
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
    setDirty(true);
  };

  const handleSave = () => {
    
    const generateId = () => {
      const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const randomLetters =
        letters[Math.floor(Math.random() * letters.length)] +
        letters[Math.floor(Math.random() * letters.length)];
      const randomNumbers = Math.floor(1000 + Math.random() * 9000); 
      return randomLetters + randomNumbers;
    };

    const today = new Date();
    const createdAt = today.toISOString().split("T")[0]; // YYYY-MM-DD
    const paymentDueDate = new Date(today);
    paymentDueDate.setDate(paymentDueDate.getDate() + formData.paymentTerms);
    const paymentDue = paymentDueDate.toISOString().split("T")[0];

    const invoiceWithMeta = {
      ...formData,
      id: generateId(),
      createdAt,
      paymentDue,
    };

    dispatch(addInvoice(invoiceWithMeta));
    const existing = JSON.parse(localStorage.getItem("invoices")) || [];
    if (!existing.find((invoices) => invoices.id === invoiceWithMeta.id)) {
      localStorage.setItem(
        "invoices",
        JSON.stringify([...existing, invoiceWithMeta]),
      );
    }
    //localStorage.setItem("invoices", JSON.stringify([...existing, invoiceWithMeta]));
    navigate("/");
  };

  const handleCancel = () => {
    if (dirty && !window.confirm("Kaydetmeden çıkmak istiyor musunuz?")) {
      return;
    }
    navigate("/");
  };

  return (
    <div className="new-invoice-page">
      <div className="top-bar">
        <button onClick={handleCancel}>← Back</button>
        <div className="actions">
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </div>

      {step === 1 && (
        <div>
          <h3>Step 1: Sender & Client Info</h3>
          <input
            placeholder="Sender Street"
            value={formData.senderAddress.street}
            onChange={(e) =>
              setFormData({
                ...formData,
                senderAddress: {
                  ...formData.senderAddress,
                  street: e.target.value,
                },
              })
            }
          />
          <input
            placeholder="Client Name"
            value={formData.clientName}
            onChange={(e) => handleChange("clientName", e.target.value)}
          />
          <input
            placeholder="Client Email"
            value={formData.clientEmail}
            onChange={(e) => handleChange("clientEmail", e.target.value)}
          />
        </div>
      )}

      {step === 2 && (
        <div>
          <h3>Step 2: Invoice Details</h3>
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

      {step === 3 && (
        <div>
          <h3>Step 3: Items</h3>

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

          <button onClick={addItem}>Add Item</button>

          {formData.items.length > 0 && (
            <ul className="item-list">
              {formData.items.map((item, idx) => (
                <li key={idx}>
                  {item.name} — {item.quantity} × ${item.price} = ${item.total}
                </li>
              ))}
            </ul>
          )}

          {/* Grand Total */}
          <h4>Grand Total: {formData.total}</h4>
        </div>
      )}

      <div className="pagination">
        {step > 1 && (
          <button onClick={() => setStep(step - 1)}>Previous</button>
        )}
        {step < 3 && <button onClick={() => setStep(step + 1)}>Next</button>}
        {step === 3 && (
          <button onClick={() => setShowPreview(!showPreview)}>
            {showPreview ? "Preview Close" : "Preview"}
          </button>
        )}
      </div>

      {showPreview && (
        <div className="preview">
          <h3>Fatura Önizleme</h3>
          <p>
            <strong>ID:</strong> 
          </p>
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
            <strong>Payment Terms:</strong> {formData.paymentTerms} gün
          </p>

          <h4>Sender Address</h4>
          <p>
            {formData.senderAddress.street}, {formData.senderAddress.city},{" "}
            {formData.senderAddress.postCode}, {formData.senderAddress.country}
          </p>

          <h4>Client Address</h4>
          <p>
            {formData.clientAddress.street}, {formData.clientAddress.city},{" "}
            {formData.clientAddress.postCode}, {formData.clientAddress.country}
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
    </div>
  );
};

export default NewInvoicePage;
