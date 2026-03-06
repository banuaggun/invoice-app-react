import React from 'react' 
import './form-elements.css'; 

const Pagination = ({ step, setStep, showPreview, setShowPreview }) => {
  return (
    <div className="pagination">
      {step > 1 && (
        <button type="button" onClick={() => setStep(step - 1)}>
          Previous
        </button>
      )}
      {step < 5 && (
        <button type="button" onClick={() => setStep(step + 1)}>
          Next
        </button>
      )}
      {step === 5 && (
        <button type="button" onClick={() => setShowPreview(!showPreview)}>
          {showPreview ? "Preview Close" : "Preview"}
        </button>
      )}
    </div>



    
  );
};


export default Pagination