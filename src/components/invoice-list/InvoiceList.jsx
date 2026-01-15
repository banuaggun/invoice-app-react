import React, { useState } from "react";
import { useSelector } from "react-redux";
import InvoiceHeader from "../invoice-header/InvoiceHeader";
import InvoiceItem from "../invoice-item/InvoiceItem";
import './invoice-list.css';

function InvoiceList() {
    const invoices = useSelector((state) => state.invoices.invoices);
    const [filter, setFilter] = useState("");

    const filteredInvoices = filter
        ? invoices.filter(inv => inv.status === filter)
        : invoices;

    return (
        <div className="invoices-list-area">
            <InvoiceHeader
                invoices={invoices}
                filteredInvoices={filteredInvoices}
                filter={filter}
                setFilter={setFilter}
            />
            <div className="invoice-list">
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
