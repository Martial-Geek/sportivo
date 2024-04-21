import React from "react";
import "../app/plainstyles.css";

const Reviews = () => {
  return (
    <section class="review" id="review">
      <h2 class="heading">
        Parcipants <span>Review</span>
      </h2>

      <div class="review-slider swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide box">
            <i class="fas fa-quote-left"></i>
            <div class="user-info">
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
