import React from "react";
import "./css/Contact.css";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="contact-page">
      <Header />
      
      <div className="contact-wrapper">
        <div className="contact-container">
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p>Humse raabta karein, humein aapki help karke khushi hogi!</p>
            
            <div className="info-list">
              <div className="info-item">
                <FaPhoneAlt className="c-icon" />
                <span>+92 300 1234567</span>
              </div>
              <div className="info-item">
                <FaEnvelope className="c-icon" />
                <span>hello@zestykitchen.com</span>
              </div>
              <div className="info-item">
                <FaMapMarkerAlt className="c-icon" />
                <span>123 Foodie Street, Karachi, Pakistan</span>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <form className="glass-form">
              <h3>Send a Message</h3>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="5" required></textarea>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}