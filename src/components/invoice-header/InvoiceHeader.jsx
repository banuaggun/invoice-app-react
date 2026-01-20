import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./invoice-header.css";

const InvoiceHeader = ({ invoices, filteredInvoices, filter, setFilter }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const options = ["all", "draft", "pending", "paid"];

  return (
    <div className="invoice-header-area">
      <div className="invoice-header-area-row-1">
        <h3>Invoices</h3>

        <button onClick={() => navigate("/new")}>New Invoice</button>
      </div>

      <div className="invoice-header-area-row-2">
        <span>
          {filter ? (
            <>
              There are{" "}
              <strong>
                {filteredInvoices.length} {filter}
              </strong>{" "}
              invoices.
            </>
          ) : (
            <>
              There are <strong>{invoices.length} total</strong> invoices.
            </>
          )}
        </span>
        <div className="invoice-header-area-row-2-filter">
          <div className="filter-title" onClick={() => setOpen(!open)}>
            {filter ? filter : "Filter by Status"}
            <span className={`arrow ${open ? "open" : ""}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="var(--text-color)"
                viewBox="0 0 256 256">
                <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"></path>
              </svg>
            </span>
          </div>
          {open && (
            <ul className="invoice-header-area-filter-list">
              {options.map((opt) => (
                <li
                  key={opt}
                  onClick={() => {
                    setFilter(opt === "all" ? "" : opt);
                    setOpen(false);
                  }}>
                  {opt}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default InvoiceHeader;
