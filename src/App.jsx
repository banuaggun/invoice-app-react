import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setInvoices } from "./features/invoiceSlice";
import InvoiceList from "./components/invoice-list/InvoiceList";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedInvoices = localStorage.getItem("invoices");

    if (storedInvoices) {
      // localStorage doluysa onu Redux store'a yükle
      dispatch(setInvoices(JSON.parse(storedInvoices)));
    } else {
      // boşsa data.json'dan fetch et
      fetch("/db/data.json")
        .then((res) => res.json())
        .then((data) => dispatch(setInvoices(data.invoices)));
    }
  }, [dispatch]);


  return (
    <div>
      <h1>Invoice App</h1>
      <InvoiceList />
    </div>
  );
}

export default App;
