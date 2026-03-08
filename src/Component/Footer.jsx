import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">    
        <div className="footer-section">
          <h2>ZestyKitchen</h2>
          <p>
            At ZestyKitchen we serve delicious and fresh meals made with
            high-quality ingredients. Experience amazing taste and fast
            delivery right at your doorstep.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Chef's Special</li>
            <li>Review</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Opening Hours</h3>
          <p>Monday - Friday : 9:00 AM - 10:00 PM</p>
          <p>Saturday : 10:00 AM - 11:00 PM</p>
          <p>Sunday : 10:00 AM - 9:00 PM</p>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p><FaMapMarkerAlt /> Lahore, Pakistan</p>
          <p><FaPhone /> +92 300 1234567</p>

          <div className="social-icons">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>

      </div>

      <div className="newsletter">
        <h3>Subscribe to our Newsletter</h3>
        <div className="newsletter-box">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 ZestyKitchen | All Rights Reserved
      </div>

    </footer>
  );
}

export default Footer;