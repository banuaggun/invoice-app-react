import React, { useState } from "react";
import { useSelector } from "react-redux";
import InvoiceHeader from "../invoice-header/InvoiceHeader";
import InvoiceItem from "../../common/list-elements/invoice-item/InvoiceItem";
import './invoice-list.css'; 
import '../../../index2.css';
import TableHeader from "../../common/list-elements/table-header/TableHeader";

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


    const columns = ["Date", "Customer", "Status", "Total", ""];


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
            
            <div className="invoice-list relative"> 
                <table>
                <TableHeader columns={columns} />
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
