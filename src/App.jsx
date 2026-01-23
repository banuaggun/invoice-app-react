import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setInvoices } from "./features/invoiceSlice";
import InvoiceListPage from "./pages/invoice-list-page/InvoiceListPage";
import NewInvoicePage from "./pages/new-invoice/NewInvoicePage";
import InvoiceDetail from "./pages/invoice-detail/InvoiceDetail";
import Layout from "./components/layout/Layout";
import Profile from "./pages/profile-page/Profile";
import EditInvoicePage from "./pages/edit-invoice/EditInvoicePage";

function App() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);

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
    <div className={`app ${theme}`}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<InvoiceListPage />} />
            <Route path="/new" element={<NewInvoicePage />} />
            <Route path="/invoice/:id" element={<InvoiceDetail />} /> 
            <Route path="/invoice/:id/edit" element={<EditInvoicePage/>} />
            <Route path="/profile" element={<Profile />} />
          </Routes> 
          
        </Layout>
      </Router>
    </div>
  );
}

export default App;
