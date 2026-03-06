import React, { useState } from "react";
import "./invoice-form.css";
import AddressBlock from "../../common/form-elements/AddressBlock";
import InvoiceInfo from "../../common/form-elements/InvoiceInfo";
import InvoiceActionButtons from "../../common/form-elements/InvoiceActionButtons";
import InvoiceTimeStatus from "../../common/form-elements/InvoiceTimeStatus";
import InvoiceDetailItem from "../../common/form-elements/InvoiceDetailItem";
import InvoicePreview from "../../common/form-elements/InvoicePreview";
import Pagination from "../../common/form-elements/Pagination";

const InvoiceForm = ({ initialData = {}, onSubmit, onCancel }) => {
  const [step, setStep] = useState(1);
  const [showPreview, setShowPreview] = useState(false);

  const [formData, setFormData] = useState({
    description: initialData.description || "",
    paymentTerms: initialData.paymentTerms || "",
    clientName: initialData.clientName || "",
    clientEmail: initialData.clientEmail || "",
    status: initialData.status || "",
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
          <AddressBlock
            title="Sender Address 1"
            address={formData.senderAddress}
            editable={true}
            onChange={(updated) =>
              setFormData({ ...formData, senderAddress: updated })
            }
          />
      )} 

      {step === 2 && ( 
        <InvoiceInfo
          title="Client Info 2"
          invoice={formData}
          editable={true}
          onChange={(updated) => setFormData(updated)}
        />
      )}

      {step === 3 && (
        <AddressBlock
            title="Client Address 3"
            address={formData.clientAddress}
            editable={true}
            onChange={(updated) =>
              setFormData({ ...formData, clientAddress: updated })
            }
          />
      )}

      {step === 4 && (
        <InvoiceTimeStatus 
        title="Invoice Details 4"
          invoice={formData}
          isFormMode={true}
          step={step}
          onChange={handleChange}
        />
      )}

      {step === 5 && (
        <div>
          <InvoiceDetailItem
            title="Items 5"
            isFormMode={true}
            newItem={newItem}
            onNewItemChange={handleNewItemChange}
            onAddItem={addItem}
          /> 
          
          {formData.items.length > 0 && (
            <ul className="item-list">
              {formData.items.map((item, idx) => (
                <li key={idx}>
                  <InvoiceDetailItem item={item} isFormMode={false} />
                </li>
              ))}
            </ul>
          )}
          <h4>Grand Total: {formData.total}</h4>
        </div>
      )}

      <Pagination
        step={step}
        setStep={setStep}
        showPreview={showPreview}
        setShowPreview={setShowPreview}
      />

      {showPreview && <InvoicePreview formData={formData} />}
    </form>
  );
};

export default InvoiceForm;
