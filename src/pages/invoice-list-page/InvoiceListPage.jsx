import React, {useEffect} from "react";
import InvoiceList from "../../components/invoice-list/InvoiceList"; 

const InvoiceListPage = () => { 
useEffect(() => {
  window.scrollTo({ top: 0, behavior: "instant" });
}, []);
    
    return (
        <div className="invoice-list-page">
            <InvoiceList />
        </div>
    );
};

export default InvoiceListPage;
