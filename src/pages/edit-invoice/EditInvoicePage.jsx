import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateInvoice } from "../../features/invoiceSlice";
import InvoiceForm from "../../components/ui/invoice-form/InvoiceForm";

const EditInvoicePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const invoices = useSelector((state) => state.invoices.invoices);
  const invoice = invoices.find((inv) => inv.id === id);

  if (!invoice) {
    return <p>Invoice not found.</p>;
  }

  const handleSubmit = (data) => {
    dispatch(updateInvoice({ ...data, id: invoice.id }));
    navigate("/");
  };

  return (
    <InvoiceForm
      initialData={invoice}
      onSubmit={handleSubmit}
      onCancel={() => navigate(-1)}
    />
  );
};

export default EditInvoicePage;
