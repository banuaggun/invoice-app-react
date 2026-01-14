import React from "react";
import { useSelector } from "react-redux";
import InvoiceItem from "../invoice-item/InvoiceItem";

function InvoiceList() {
    const invoices = useSelector((state) => state.invoices.invoices);

    return (
        <div>
            {invoices.length === 0 ? (
                <p>No invoices found.</p>
            ) : (
                invoices.map((inv) => <InvoiceItem key={inv.id} invoice={inv} />)
            )}
        </div>
    );
}

export default InvoiceList;
