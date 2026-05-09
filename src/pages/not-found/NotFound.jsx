import React from "react";
import NotFoundIcon from "../../assets/icons/NotFoundIcon"; 
import './not-found.css';

const NotFoundPage = () => {
  return (
    <div style={{ margin:"4rem", padding: "2rem", textAlign: "center" }}>  
    <div className="icon">
 <NotFoundIcon />        
    </div>
   
      <h1>404 - Sayfa Bulunamadı</h1>
      <p>Aradığınız sayfa mevcut değil.</p>
    </div>
  );
};

export default NotFoundPage;
