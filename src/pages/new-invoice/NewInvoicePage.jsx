import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addInvoice } from "../../features/invoiceSlice"; 
import InvoiceForm from "../../components/ui/invoice-list/InvoiceList";
import "./new-invoice.css";

const NewInvoicePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (invoiceData) => {
    // ID ve tarihleri InvoiceForm zaten ekliyor
    dispatch(addInvoice(invoiceData));

    const existing = JSON.parse(localStorage.getItem("invoices")) || [];
    if (!existing.find((inv) => inv.id === invoiceData.id)) {
      localStorage.setItem("invoices", JSON.stringify([...existing, invoiceData]));
    }

    navigate("/");
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div className="new-invoice-page">
      <InvoiceForm onSubmit={handleSubmit} onCancel={handleCancel} />
    </div>
  );
};

export default NewInvoicePage;
