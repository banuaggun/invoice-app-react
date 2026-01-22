import React, { useState } from "react";
import "./invoice-filter.css";

const InvoiceFilter = ({ filter, setFilter, sort, setSort }) => {
  const [openStatus, setOpenStatus] = useState(false);
  const [openSort, setOpenSort] = useState(false); 

  

  const statusOptions = ["all", "draft", "pending", "paid"];
  const sortOptions = ["newest", "oldest"];

  return (
    <div className="invoice-filter">
      {/* Status Filter */}
      <div className="filter-section">
        <div className="filter-title" onClick={() => setOpenStatus(!openStatus)}>
          {filter ? filter : "Filter by Status"}
          <span className={`arrow ${openStatus ? "open" : ""}`}>
            ▼
          </span>
        </div>
        {openStatus && (
          <ul className="invoice-filter-list">
            {statusOptions.map((opt) => (
              <li
                key={opt}
                onClick={() => {
                  setFilter(opt === "all" ? "" : opt);
                  setOpenStatus(false);
                }}>
                {opt}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Sort Filter */}
      <div className="filter-section">
        <div className="filter-title" onClick={() => setOpenSort(!openSort)}>
          {sort ? sort : "Sort by Date"}
          <span className={`arrow ${openSort ? "open" : ""}`}>
            ▼
          </span>
        </div>
        {openSort && (
          <ul className="invoice-filter-list">
            {sortOptions.map((opt) => (
              <li
                key={opt}
                onClick={() => {
                  setSort(opt);
                  setOpenSort(false);
                }}>
                {opt}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default InvoiceFilter;
