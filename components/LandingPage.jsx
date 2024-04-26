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
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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
      <div className="my-40 w-full">
        <h1 className="text-center font-sans text-[80px] font-semibold text-[#3867d6]">
          Welcome to Team Sportivo
        </h1>
        <h3 className="mt-4 w-auto text-center font-inter text-[50px] leading-[60px] text-white">
          The Official Sports Club of Future Institute Of Engineering and
          Management
        </h3>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={55}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
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
