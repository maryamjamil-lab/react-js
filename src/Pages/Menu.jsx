import React, { useState } from "react";
import "./css/Menu.css";
import Header from "../Component/Header";
import Footer from "../Component/Footer";

const menuData = [
  { id: 1, name: "Spicy Pepperoni", price: "15", category: "Pizza", desc: "Extra cheese with hot pepperoni", img: 'https://i.pinimg.com/736x/fc/fb/3b/fcfb3bf8f111baedc3a83ae42d88defe.jpg' },
  { id: 2, name: "Double Cheese Burger", price: "12", category: "Burger", desc: "Juicy beef patty with cheddar", img: 'https://i.pinimg.com/736x/a4/6b/4c/a46b4ca02727934733a22d3eb7b9183a.jpg'  },
  { id: 3, name: "Creamy Alfredo", price: "18", category: "Pasta", desc: "White sauce pasta with mushrooms", img: 'https://i.pinimg.com/1200x/e4/c8/47/e4c847570450d2ef6e928ffb953330c3.jpg'},
];

export default function Menu() {
  const [filter, setFilter] = useState("All");

  const filteredItems = filter === "All" ? menuData : menuData.filter(item => item.category === filter);

  return (
    <div className="menu-page">
      <Header />
      
      <section className="menu-hero">
        <h1>Our Signature Menu</h1>
        <p>Crafted with passion, served with love.</p>
      </section>

      <div className="menu-filters">
        {["All", "Pizza", "Burger", "Pasta"].map(cat => (
          <button 
            key={cat} 
            className={filter === cat ? "active-btn" : ""} 
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="menu-grid">
        {filteredItems.map(item => (
          <div className="food-card" key={item.id}>
            <div className="food-img">
              <img src={item.img} alt={item.name} />
              <span className="price-tag">${item.price}</span>
            </div>
            <div className="food-info">
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
              <button className="add-cart">Order Now</button>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
