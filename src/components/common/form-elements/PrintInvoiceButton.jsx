import React from "react";
import './form-elements.css'; 

const PrintInvoiceButton = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button onClick={handlePrint}>
      Print / Save as PDF
    </button>
  );
};

export default PrintInvoiceButton;
