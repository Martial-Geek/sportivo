import React from "react";
import "../app/plainstyles.css";

const Reviews = () => {
  return (
    <section className="review" id="review">
      <h2 className="heading">
        Parcipants <span>Review</span>
      </h2>

      <div className="review-slider swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide box">
            <i className="fas fa-quote-left"></i>
            <div className="user-info">
              <img scr="assets/slide1.JPG" alt="" />
              <h3>John Doe</h3>
              <span>Happy Participant</span>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            repellat reprehenderit sapiente harum labore hic repudiandae odit
            porro et deserunt excepturi dolorem consequatur, fugit aut!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
