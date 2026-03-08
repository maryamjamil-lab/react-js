import React from "react";
import "./css/Chef.css";
import specialDish from "../assets/menu2.jpg";
import { FaFire, FaLeaf, FaStar } from "react-icons/fa";
import Header from "../Component/Header";
import Footer from "../Component/Footer";

export default function ChefSpecial() {
  return (
    <div>
      <Header/>
    
    <section className="special-section">
      <div className="special-container">
        
        <div className="special-image-area">
          <div className="glow-circle"></div>
          <img src={specialDish} alt="Chef Special" className="floating-img" />
        </div>

        <div className="special-info">
          <span className="badge">Chef's Selection</span>
          <h2>Golden Glazed <br /> Truffle Burger</h2>
          <div className="rating">
            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
            <span>(5.0 Reviews)</span>
          </div>
          <p>
            Humare chef ki mehnat aur tajurbe ka nichor. Ye pasta fresh truffles, 
            handmade sauce, aur 24-hour slow-cooked herbs se tayar kiya gaya hai. 
            Ek aisi dish jo aapka zaiqa hamesha ke liye badal degi.
          </p>

          <div className="dish-features">
            <div className="f-item"><FaFire /> <span>Smoky Flavor</span></div>
            <div className="f-item"><FaLeaf /> <span>Organic Herbs</span></div>
          </div>

          <div className="price-action">
            <span className="special-price">$24.00</span>
            <button className="order-btn">Order This Masterpiece</button>
          </div>
        </div>

      </div>
    </section>
    <Footer/>
    </div>
  );
}
