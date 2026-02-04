import React, { useState } from "react";
import { useSelector } from "react-redux";
import InvoiceHeader from "../invoice-header/InvoiceHeader";
import InvoiceItem from "../invoice-item/InvoiceItem";
import './invoice-list.css';

function InvoiceList() {
    const invoices = useSelector((state) => state.invoices.invoices);
    const [filter, setFilter] = useState("");
    const [sort, setSort] = useState(""); 

    let filteredInvoices = filter
        ? invoices.filter(inv => inv.status === filter)
        : invoices;

    if (sort === "newest") {
        filteredInvoices = [...filteredInvoices].sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
    } else if (sort === "oldest") {
        filteredInvoices = [...filteredInvoices].sort(
            (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        );
    }

    return (
        <div className="invoices-list-area">
            <InvoiceHeader
                invoices={invoices}
                filteredInvoices={filteredInvoices}
                filter={filter}
                setFilter={setFilter}
                sort={sort}  
                setSort={setSort}  
            /> 
            
            <div className="invoice-list"> 
                <table>
                <thead>
            <tr>
              <th scope="col">ID</th> 
              <th scope="col">Customer</th> 
              <th scope="col">Date</th> 
              <th scope="col">Total</th> 
              <th scope="col"></th>
            </tr>
          </thead> 
            </table>
                {filteredInvoices.length === 0 ? (
                    <p>No invoices found.</p>
                ) : (
                    filteredInvoices.map((inv) => (
                        <InvoiceItem key={inv.id} invoice={inv} />
                    ))
                )}
            </div>
        </div>
    );
}

export default InvoiceList;
