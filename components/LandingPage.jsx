"use client";

import { useEffect, useState } from "react";

import { fetchImages } from "@/utils/getFirebaseImagePath";
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
import { Skeleton } from "@mui/material";

const LandingPage = () => {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const urls = await fetchImages("images/slide");
      setSlides(urls);
      setLoading(false);
    })();
  }, []);

  return (
    <section className="home" id="home">
      {loading ? (
        <>
          <div className="mt-64 flex w-full flex-col gap-20 max-md:hidden">
            <Skeleton
              variant="rectangular"
              height={100}
              className="rounded-xl"
            />
            <Skeleton
              variant="rectangular"
              height={50}
              className="rounded-xl"
            />
            <div className="flex gap-20">
              <Skeleton
                variant="rectangular"
                height={300}
                animation="wave"
                className="basis-1/3 rounded-xl"
              />
              <Skeleton
                variant="rectangular"
                height={300}
                animation="wave"
                className="basis-1/3 rounded-xl"
              />
              <Skeleton
                variant="rectangular"
                height={300}
                animation="wave"
                className="basis-1/3 rounded-xl"
              />
            </div>
          </div>

          <div className="mt-48 flex w-full flex-col gap-20 md:hidden">
            <Skeleton
              variant="rectangular"
              height={80}
              className="rounded-xl"
            />
            <Skeleton
              variant="rectangular"
              height={40}
              className="rounded-xl"
            />
            <Skeleton
              variant="rectangular"
              height={260}
              animation="wave"
              className="rounded-xl"
            />
          </div>
        </>
      ) : (
        <>
          <div className="mb-28 mt-40 w-full">
            <h1 className="my-14 text-center font-serif text-[40px] font-bold leading-tight text-[#3867d6] sm:text-[80px]">
              Welcome to Team Sportivo
            </h1>
            <h3 className="w-auto px-12 text-center font-serif text-[20px] leading-[30px] text-white sm:p-0 sm:text-[50px] sm:leading-[60px]">
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
            breakpoints={{
              // when window width is >= 768px
              768: {
                slidesPerView: 3,
              },
              // when window width is < 768px
              0: {
                slidesPerView: 1,
              },
            }}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="relative mx-auto size-[300px] shadow-xl sm:size-[350px]">
                  <Image
                    src={slide}
                    alt={`Image ${index}`}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
    </section>
  );
};

export default LandingPage;
