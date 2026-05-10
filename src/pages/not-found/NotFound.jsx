import React from "react";
import NotFoundIcon from "../../assets/icons/NotFoundIcon";
import "./not-found.css";

const NotFoundPage = () => {
  return (
    <div className="not-found-area">
      <div className="icon">
        <NotFoundIcon />
      </div>
      <div className="content">
        <h3>404 - Page Not Found</h3>
        <p>The page you are looking for does not exist.</p>
        <a href="/" target="_self" rel="noopener noreferrer">
          Return to Home Page
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;
