import React from "react";
import { useNavigate } from "react-router-dom";
import "./invoice-header.css";
import InvoiceFilter from "../common/list-elements/invoice-filter/InvoiceFilter";

const InvoiceHeader = ({ invoices, filteredInvoices, filter, setFilter, sort, setSort }) => {
  const navigate = useNavigate();

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

      </div> 
      <div className="invoice-header-area-row-3">
          <InvoiceFilter 
          filter={filter} 
          setFilter={setFilter} 
          sort={sort} 
          setSort={setSort} 
        />
        </div>
    </div>
  );
};

export default InvoiceHeader;
