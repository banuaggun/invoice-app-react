import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addInvoice } from "../features/invoiceSlice";

const NewInvoicePage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [step, setStep] = useState(1);
    const [dirty, setDirty] = useState(false);

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

    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
        setDirty(true);
    };

    const addItem = () => {
        setFormData({
            ...formData,
            items: [...formData.items, { name: "", quantity: 1, price: 0, total: 0 }],
        });
        setDirty(true);
    };

    const updateItem = (index, field, value) => {
        const newItems = [...formData.items];
        newItems[index][field] = value;
        if (field === "quantity" || field === "price") {
            newItems[index].total = newItems[index].quantity * newItems[index].price;
        }
        setFormData({
            ...formData,
            items: newItems,
            total: newItems.reduce((sum, i) => sum + i.total, 0),
        });
        setDirty(true);
    };

    const handleSave = () => {
        dispatch(addInvoice(formData));
        const existing = JSON.parse(localStorage.getItem("invoices")) || [];
        localStorage.setItem("invoices", JSON.stringify([...existing, formData]));
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
            {/* Üst bar */}
            <div className="top-bar">
                <button onClick={handleCancel}>← Back</button>
                <div className="actions">
                    <button onClick={handleSave}>Save</button>
                    <button onClick={handleCancel}>Cancel</button>
                </div>
            </div>

            {/* Form içerik */}
            {step === 1 && (
                <div>
                    <h3>Step 1: Sender & Client Info</h3>
                    <input
                        placeholder="Sender Street"
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                senderAddress: { ...formData.senderAddress, street: e.target.value },
                            })
                        }
                    />
                    <input
                        placeholder="Client Name"
                        onChange={(e) => handleChange("clientName", e.target.value)}
                    />
                    <input
                        placeholder="Client Email"
                        onChange={(e) => handleChange("clientEmail", e.target.value)}
                    />
                </div>
            )}

            {step === 2 && (
                <div>
                    <h3>Step 2: Invoice Details</h3>
                    <input
                        placeholder="Description"
                        onChange={(e) => handleChange("description", e.target.value)}
                    />
                    <select
                        onChange={(e) => handleChange("paymentTerms", Number(e.target.value))}
                    >
                        <option value={1}>1 day</option>
                        <option value={7}>7 days</option>
                        <option value={30}>30 days</option>
                    </select>
                    <select onChange={(e) => handleChange("status", e.target.value)}>
                        <option value="draft">Draft</option>
                        <option value="pending">Pending</option>
                        <option value="paid">Paid</option>
                    </select>
                </div>
            )}

            {step === 3 && (
                <div>
                    <h3>Step 3: Items</h3>
                    {formData.items.map((item, index) => (
                        <div key={index}>
                            <input
                                placeholder="Name"
                                onChange={(e) => updateItem(index, "name", e.target.value)}
                            />
                            <input
                                type="number"
                                placeholder="Quantity"
                                onChange={(e) => updateItem(index, "quantity", Number(e.target.value))}
                            />
                            <input
                                type="number"
                                placeholder="Price"
                                onChange={(e) => updateItem(index, "price", Number(e.target.value))}
                            />
                            <span>Total: {item.total}</span>
                        </div>
                    ))}
                    <button onClick={addItem}>Add Item</button>
                    <h4>Grand Total: {formData.total}</h4>
                </div>
            )}

            {/* Pagination */}
            <div className="pagination">
                {step > 1 && <button onClick={() => setStep(step - 1)}>Previous</button>}
                {step < 3 && <button onClick={() => setStep(step + 1)}>Next</button>}
            </div>
        </div>
    );
};

export default NewInvoicePage;
