"use client";
// Remove the unnecessary import statement for React
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "../app/plainstyles.css";
import { useEffect } from "react";
import Image from "next/image";

const LandingPage = () => {
  return (
    <section className="home" id="home">
      <div className="content">
        <h3>
          <span>Welcome to Team Sportivo</span>
        </h3>
        <h3>
          The Official Sports Club of Future Institute Of Engineering and
          Managenent{" "}
        </h3>
        <a href="#" className="btn">
          Read More
        </a>
      </div>

      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <Image
            src={"/images/slide/slide1.jpg"}
            alt="image"
            width={480}
            height={480}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/slide/slide2.jpg"}
            alt="image"
            width={480}
            height={480}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/slide/slide3.jpg"}
            alt="image"
            width={480}
            height={480}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/slide/slide4.jpg"}
            alt="image"
            className="swiper-slide"
            width={480}
            height={480}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/slide/slide5.jpg"}
            alt="image"
            className="swiper-slide"
            width={480}
            height={480}
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            src={"/images/slide/slide6.jpg"}
            alt="image"
            className="swiper-slide"
            width={480}
            height={480}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/slide/slide7.jpg"}
            alt="image"
            className="swiper-slide"
            width={480}
            height={480}
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            src={"/images/slide/slide8.jpg"}
            alt="image"
            className="swiper-slide"
            width={480}
            height={480}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/slide/slide9.jpg"}
            alt="image"
            className="swiper-slide"
            width={480}
            height={480}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/slide/slide10.jpg"}
            alt="image"
            className="swiper-slide"
            width={480}
            height={480}
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default LandingPage;
