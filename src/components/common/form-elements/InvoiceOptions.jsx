import React, { useState, useEffect } from "react";
import "./form-elements.css";

const InvoiceOptions = ({ type, value, onChange }) => {
  const [open, setOpen] = useState(false);

  const optionsMap = {
    paymentTerms: [
      { label: "1 day", value: 1 },
      { label: "7 days", value: 7 },
      { label: "30 days", value: 30 },
    ],
    status: [
      { label: "Draft", value: "draft" },
      { label: "Pending", value: "pending" },
      { label: "Paid", value: "paid" },
    ],
  };

  const placeholderMap = {
    paymentTerms: "Select a Payment Term",
    status: "Select a Status",
  };

  const options = optionsMap[type] || [];
  const placeholder = placeholderMap[type] || "Select...";

  // localStorage’a otomatik kaydet
  useEffect(() => {
    if (value !== undefined) {
      localStorage.setItem(type, value);
    }
  }, [value, type]);

  const handleSelect = (val) => {
    onChange(type, val);
    setOpen(false);
  };

  return (
    <div className="dropdown">
      <button
        type="button"
        className="dropdown-toggle"
        onClick={() => setOpen(!open)}
      >
        {options.find((opt) => opt.value === value)?.label || placeholder}
        <span className="arrow">▼</span>
      </button>
      {open && (
        <ul className="dropdown-menu">
          {options.map((opt) => (
            <li
              key={opt.value}
              className="dropdown-item"
              onClick={() => handleSelect(opt.value)}
            >
              {opt.label}
            </li>
          ))}
        </ul> 
        
      )}
    </div>
  );
};

export default InvoiceOptions;
