import React from "react";
import "./Footer.css"; // Import the CSS file
import SocialCard from "./SocialCard";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
            At Shoe-World, we deliver the best in style and comfort. Step into
            a world of endless possibilities with our trendy collections!
          </p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#shop">Shop</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
          <SocialCard/>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Shoe-World. All rights reserved.</p>
      </div>
    </footer>
    
    
   
  );
};

export default Footer;
