import React from "react";
import "./css/About.css";
import chef from "../assets/about.jpg";
import foodvideo from '../assets/video.mp4';
import Header from "../Component/Header";
import Footer from "../Component/Footer";

function About() {
  return (
    <div className="about">
      <Header />
      
      <div className="hero-container">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src={foodvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <div className="video-overlay">
          <h1>About ZestyKitchen</h1>
          <p>Discover our passion for delicious food and great service.</p>
        </div>
      </div>

      <div className="about-story">
        <div className="about-img">
          <img src={chef} alt="chef" />
        </div>
        <div className="about-text">
          <h2>Our Story</h2>
          <p>
            At ZestyKitchen, our journey began with a simple passion for creating delicious food that brings people together. What started as a small idea has grown into a place where flavor, quality, and creativity meet. Our chefs carefully select fresh ingredients and prepare every dish with dedication and love.
          </p>
        </div>
      </div>

      <div className="about-features">
        <h2>Why Choose Us</h2>
        <div className="features">
          <div className="feature">
            <h3>Fresh Ingredients</h3>
            <p>We always use fresh and high-quality ingredients.</p>
          </div>
          <div className="feature">
            <h3>Expert Chefs</h3>
            <p>Our chefs have years of culinary experience.</p>
          </div>
          <div className="feature">
            <h3>Fast Delivery</h3>
            <p>Your food arrives hot and fresh at your doorstep.</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;