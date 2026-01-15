import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setInvoices } from "./features/invoiceSlice";
import InvoiceListPage from "./pages/InvoiceListPage";
import NewInvoicePage from "./pages/NewInvoicePage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedInvoices = localStorage.getItem("invoices");

    if (storedInvoices) {
      dispatch(setInvoices(JSON.parse(storedInvoices)));
    } else {
      fetch("/db/data.json")
        .then((res) => res.json())
        .then((data) => dispatch(setInvoices(data.invoices)));
    }
  }, [dispatch]);


  return (
    <Router>
      <Routes>
        <Route path="/" element={<InvoiceListPage />} />
        <Route path="/new" element={<NewInvoicePage />} />
      </Routes>
    </Router>
  );
}

export default App;
