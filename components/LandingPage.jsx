"use client";

import { useEffect, useState } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import storage from "@/firebaseConfig";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import "../app/plainstyles.css";

const LandingPage = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const storageRef = ref(storage, "images/slide");
    listAll(storageRef)
      .then((res) => {
        const promises = res.items.map((itemRef) => getDownloadURL(itemRef));
        Promise.all(promises)
          .then((urls) => {
            setSlides(urls);
          })
          .catch((error) => {
            console.error("Error getting download URLs:", error);
          });
      })
      .catch((error) => {
        console.error("Error listing slides:", error);
      });
  }, []);

  return (
    <section className="home" id="home">
      <div className="content">
        <h3>
          <span>Welcome to Team Sportivo</span>
        </h3>
        <h3>
          The Official Sports Club of Future Institute Of Engineering and
          Management{" "}
        </h3>
        {/* <a href="#" className="btn">
          Read More
        </a> */}
        {/* <button className="rounded-lg bg-purple-600 px-6 py-3 text-3xl font-bold text-white hover:bg-purple-700">
          Read More
        </button> */}
      </div>

      <Swiper
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
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Image
              src={slide}
              alt={`Image ${index}`}
              height={1000}
              width={1000}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default LandingPage;
