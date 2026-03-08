import React from "react";
import Header from "../Component/Header";
import "./css/Home.css";
import { FaCalendarAlt, FaTools, FaTruck, FaUtensils } from "react-icons/fa";
import Footer from "../Component/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <section className="hero">
        <div className="hero-content">
          <h1>Delicious Food For Every Mood</h1>
          <p>Experience the taste of luxury</p>
          <button className="order">Order Now</button>
        </div>
      </section>
      <div className="options-container">
        <div className="option">
          <FaUtensils className="icon" />
          <span>Restaurants</span>
        </div>

        <div className="option">
          <FaTruck className="icon" />
          <span>Delivery</span>
        </div>

        <div className="option">
          <FaCalendarAlt className="icon" />
          <span>Reservations</span>
        </div>

        <div className="option">
          <FaTools className="icon" />
          <span>Home Services</span>
        </div>
      </div>
      <section className="align">
        <div className="center">
          <div className="text">
            <span>18 Restaurants</span>
          </div>
          <div className="text">
            <span>9 People Served</span>
          </div>
          <div className="text">
            <span>44 Registered Users</span>
          </div>
        </div>
      </section>
      <section>
        <div className="discover">
          <h1>Discover Delicious Flavors</h1>
          <p>
            At ZestyKitchen, every dish is crafted to perfection. Browse our
            menu and discover flavors that will make every bite memorable.
            Explore our wide variety of freshly prepared dishes made with love and the finest ingredients. 
            From mouth-watering meals to delightful desserts, ZestyKitchen brings you an unforgettable taste experience.
            Fresh ingredients, bold flavors, and recipes made with passion.  
            Discover food that satisfies every craving.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
