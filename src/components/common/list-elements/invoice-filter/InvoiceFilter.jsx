import React, { useState, useEffect, useRef } from "react";
import "./invoice-filter.css";

const InvoiceFilter = ({ filter, setFilter, sort, setSort }) => {
  const [openStatus, setOpenStatus] = useState(false);
  const [openSort, setOpenSort] = useState(false);

  const statusRef = useRef(null);
  const sortRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        statusRef.current &&
        !statusRef.current.contains(event.target) &&
        sortRef.current &&
        !sortRef.current.contains(event.target)
      ) {
        setOpenStatus(false);
        setOpenSort(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const statusOptions = ["all", "draft", "pending", "paid"];
  const sortOptions = ["all", "newest", "oldest"];

  return (
    <div className="invoice-filter">
      {/* Status Filter */}
      <div className="filter-section" ref={statusRef}>
        <div
          className="filter-title"
          onClick={() => {
            setOpenStatus(!openStatus);
            setOpenSort(false);
          }}>
          {filter ? filter : "Filter by Status"}
          <span className={`arrow ${openStatus ? "open" : ""}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="#000000"
              viewBox="0 0 256 256">
              <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"></path>
            </svg>
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
      <div className="filter-section" ref={sortRef}>
        <div
          className="filter-title"
          onClick={() => {
            setOpenSort(!openSort);
            setOpenStatus(false);
          }}>
          {sort ? sort : "Sort by Date"}
          <span className={`arrow ${openSort ? "open" : ""}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="#000000"
              viewBox="0 0 256 256">
              <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"></path>
            </svg>
          </span>
        </div>
        {openSort && (
          <ul className="invoice-filter-list">
            {sortOptions.map((opt) => (
              <li
                key={opt}
                onClick={() => {
                  setSort(opt === "all" ? "" : opt);
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
