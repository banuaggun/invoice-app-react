// App.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInvoices } from "./features/invoiceSlice";

function App() {
  const dispatch = useDispatch();
  const invoices = useSelector((state) => state.invoices.invoices);

  useEffect(() => {
    if (!localStorage.getItem("invoices")) {
      fetch("/db/data.json")
        .then((res) => res.json())
        .then((data) => dispatch(setInvoices(data.invoices)));
    }
  }, [dispatch]);

  return (
    <div>
      <h1>Invoice App</h1>
      <ul>
        {invoices.map((inv) => (
          <li key={inv.id}>
            <strong>{inv.id}</strong> - {inv.clientName} - {inv.total}$
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
