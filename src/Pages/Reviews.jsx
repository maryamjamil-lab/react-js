import React from "react";
import "./css/Reviews.css";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import Header from "../Component/Header";
import Footer from "../Component/Footer";

const reviewData = [
  {
    id: 1,
    name: "Ayesha Khan",
    text: "ZestyKitchen ka pizza waqayi lajawab hai! Crust bilkul perfect tha.",
    img: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Zain Ahmed",
    text: "Chef's special pasta try kiya, zaiqa hamesha yaad rahega.",
    img: "https://randomuser.me/api/portraits/men/2.jpg",
    rating: 5
  },
  {
    id: 3,
    name: "Sana Malik",
    text: "Delivery bohat fast hai aur khana bilkul garam mila. Highly recommended!",
    img: "https://randomuser.me/api/portraits/women/3.jpg",
    rating: 4
  }
];

export default function Reviews() {
  return (
    <div>
      <Header/>
    
    <section className="reviews-section">
      <div className="reviews-header">
        <span className="sub-title">What Our Foodies Say</span>
        <h2>Customer Love & Reviews</h2>
      </div>

      <div className="reviews-container">
        {reviewData.map((rev) => (
          <div className="review-card" key={rev.id}>
            <div className="quote-icon">
              <FaQuoteLeft />
            </div>
            <p className="review-text">"{rev.text}"</p>
            
            <div className="reviewer-info">
              <img src={rev.img} alt={rev.name} className="reviewer-img" />
              <div>
                <h4>{rev.name}</h4>
                <div className="stars">
                  {[...Array(rev.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    <Footer/>
    </div>
  );
}