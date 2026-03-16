import React from "react";
import "./form-elements.css";
import BackIcon from "../../../assets/icons/BackIcon";
import ForwardIcon from "../../../assets/icons/ForwardIcon";

const Pagination = ({ step, setStep, showPreview, setShowPreview }) => {
  return (
    <div className="pagination">
      {step === 1 && (
        <div className="right">
          <button
            className="btn-forward cta-back"
            type="button"
            onClick={() => setStep(step + 1)}>
            <ForwardIcon />
          </button>
        </div>
      )}

      {step > 1 && step < 5 && (
        <>
          <button
            className="btn-back cta-back"
            type="button"
            onClick={() => setStep(step - 1)}>
            <BackIcon />
          </button>
          <button
            className="btn-forward cta-back"
            type="button"
            onClick={() => setStep(step + 1)}>
            <ForwardIcon />
          </button>
        </>
      )}

      {step === 5 && (
        <>
          <button
            className="btn-back cta-back"
            type="button"
            onClick={() => setStep(step - 1)}>
            <BackIcon />
          </button>
          <button type="button" onClick={() => setShowPreview(!showPreview)}>
            {showPreview ? "Preview Close" : "Preview"}
          </button>
        </>
      )}
    </div>
  );
};

export default Pagination;
