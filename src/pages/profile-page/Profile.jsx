import React from "react";
import "./profile.css";

const Profile = () => {
  return (
    <div className="profile-page">
      <h1>About the Creator</h1>
      <p>This project was designed and developed personally by Banu.</p>

      <div className="profile-links">
        <a href="https://github.com/banu" target="_blank" rel="noopener noreferrer">
          <div className="profile-card github">
            <h2>GitHub</h2>
            <p>Explore my code and open-source projects.</p>
          </div>
        </a>

        <a href="https://www.behance.net/banu" target="_blank" rel="noopener noreferrer">
          <div className="profile-card behance">
            <h2>Behance</h2>
            <p>See my design portfolio and creative works.</p>
          </div>
        </a>

        <a href="https://linkedin.com/in/banu" target="_blank" rel="noopener noreferrer">
          <div className="profile-card linkedin">
            <h2>LinkedIn</h2>
            <p>Connect with me professionally.</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Profile;
