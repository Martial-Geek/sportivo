"use client";
import { useState, useEffect } from "react";
import "../app/plainstyles.css";
import { fetchImage } from "@/utils/getFirebaseImagePath";
import Image from "next/image";
import { aboutText } from "@/constants/aboutText";

const AboutUs = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    (async () => {
      const url = await fetchImage("assets/aboutus.webp");
      setImageUrl(url);
    })();
  }, []);

  return (
    <section id="aboutus">
      <h1 className="heading py-24">
        <span>About</span> Us
      </h1>
      <div className="flex flex-col items-center justify-center max-md:gap-28 md:flex-row md:items-start">
        <div className="relative h-[400px] w-[550px] shrink-0 bg-slate-800 max-md:w-[475px] max-sm:h-[300px] max-sm:w-[370px]">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt="about-us"
              fill
              className="object-cover p-4"
            />
          )}
        </div>

        <div className="flex flex-auto flex-col gap-8  p-4 max-md:max-w-[550px] max-sm:max-w-[400px] sm:ml-8">
          <h3 className="mb-4 text-5xl font-bold text-white">
            A few words ...
          </h3>
          <p className="mb-4 text-2xl text-white">{aboutText.main}</p>
          <p className="mb-4 text-2xl text-white">{aboutText.mobileExpanded}</p>

          {isExpanded && (
            <p className="mb-4 text-2xl text-white">{aboutText.additional}</p>
          )}

          <button
            className="max-w-fit rounded-lg bg-purple-600 px-6 py-3 text-3xl font-bold text-white hover:bg-purple-700"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
