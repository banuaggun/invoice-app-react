import React from "react";
import Screenshot from "../../assets/screenshots/screenshot-1.png";
import "../../index2.css";
import "./profile.css";
import "../../components/common/form-elements/form-elements.css";
import {
  BehanceIcon,
  GithubIcon,
  LinkedInIcon,
} from "../../assets/icons/Socials";
import logo from "../../assets/logo/logo-fav-2.png";

const Profile = () => {
  return (
    <div className="profile-page flex-inline flex-column justify-center align-center">
      <div className="container">
        <header className="hero">
          <h3>Hello, </h3>
          <h2>I'm Banu AĞGÜN</h2>
          <p>UX & UI Designer & Frontend Developer</p>
          <div className="social-links flex">
            <a
              href="https://portfolio-banuaggun.vercel.app/"
              target="_blank"
              className="btn-edit"
              rel="noopener noreferrer">
              <img
                src={logo}
                alt="logo"
                className="logo flex align-center justify-center"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/banuaggun/?locale=en-US"
              target="_blank"
              className="btn-edit flex align-center justify-center"
              rel="noopener noreferrer">
              <LinkedInIcon size={32} color="#000" />
            </a>
            <a
              href="https://www.behance.net/banuaggun?locale=tr_TR&"
              target="_blank"
              className="btn-edit flex align-center justify-center"
              rel="noopener noreferrer">
              <BehanceIcon size={32} color="#000" />
            </a>
            <a
              href="https://github.com/banuaggun"
              target="_blank"
              className="btn-edit flex align-center justify-center"
              rel="noopener noreferrer">
              <GithubIcon size={32} color="#000" />
            </a>
          </div>
        </header>

        {/* About Me Section */}
        <section className="about">
          <h2>About Me</h2>
          <p>
            I'm passionate about UX & UI design and frontend development. I
            enjoy creating user-friendly, aesthetic, and functional
            interfaces.{" "}
          </p>
          <p>
            By combining coding and design, I build modern responsive web
            applications. I'm committed to continuous learning and
            self‑improvement; discovering new technologies and developing
            innovative projects inspires me.
          </p>
        </section>

        {/* Project Section */}
        <section className="project">
          <h2>Invoice App Project</h2>
          <p>
            Invoice App is a simple yet functional invoice management
            application that I developed using ReactJS.
          </p>
          <ul>
            <li>Component-based architecture with ReactJS</li>
            <li>Global state management using Redux</li>
            <li>
              I developed my own lightweight utility CSS approach, which helped
              me keep styles modular and reusable.
            </li>
            <li>Responsive design for all devices</li>
            <li>Light/Dark theme support</li>
            <li>Print feature for invoices</li>
          </ul>
          <div className="project-image">
            <img
              src={Screenshot}
              alt="Invoice App Screenshot"
              className="block"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;
