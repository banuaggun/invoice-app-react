import React, { useState, useRef, useEffect } from "react";
import "./form-elements.css";

const InvoiceOptions = ({ type, value, onChange }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Seçenekleri {label, value} şeklinde tanımlıyoruz
  const paymentTermsOptions = [
    { label: "1 day", value: 1 },
    { label: "7 days", value: 7 },
    { label: "30 days", value: 30 },
  ];

  const statusOptions = [
    { label: "Draft", value: "draft" },
    { label: "Pending", value: "pending" },
    { label: "Paid", value: "paid" },
  ];

  const options = type === "paymentTerms" ? paymentTermsOptions : statusOptions;
  const placeholder =
    type === "paymentTerms" ? "Select a Payment Term" : "Select a Status";

  // Dışarı tıklayınca kapanması için effect
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // localStorage’dan ilk değer yükle
  useEffect(() => {
    const saved = localStorage.getItem(type);
    if (saved && !value) {
      // paymentTerms sayısal olduğu için parse et
      const parsed =
        type === "paymentTerms" ? parseInt(saved, 10) : saved;
      onChange(type, parsed);
    }
  }, [type, value, onChange]);

  // localStorage’a otomatik kaydet
  useEffect(() => {
    if (value !== undefined && value !== null) {
      localStorage.setItem(type, value);
    }
  }, [value, type]);

  const handleSelect = (val) => {
    onChange(type, val);
    setOpen(false);
  };

  return (
    <div className="dropdown relative flex flex-column justify-center" ref={dropdownRef}> 
    <div className="dropdown-section">

    
      <div
        className="dropdown-title flex justify-between"
        onClick={() => setOpen(!open)}
      >
        {options.find((opt) => opt.value === value)?.label || placeholder}
        <span className={`arrow ${open ? "open" : ""}`}>▼</span>
      </div>
      {open && (
        <ul className="dropdown-menu absolute flex flex-column justify-center align-start">
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
    </div>
  );
};

export default InvoiceOptions;
