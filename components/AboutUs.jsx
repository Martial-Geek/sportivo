"use client";

import { useState, useEffect } from "react";
import "../app/plainstyles.css";
// import { ref, getDownloadURL } from "firebase/storage";
// import storage from "@/firebaseConfig";
import { fetchImage } from "@/utils/getFirebaseImagePath";

import Image from "next/image";

const AboutUs = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);
  const [isDesktopExpanded, setIsDesktopExpanded] = useState(false);

  useEffect(() => {
    (async () => {
      const url = await fetchImage("assets/aboutus.webp");
      setImageUrl(url);
    })();

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767); // Adjust the threshold as needed
    };

    handleResize(); // Check on component mount

    window.addEventListener("resize", handleResize); // Listen for window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up
    };
  }, []);
  return (
    <section id="aboutus">
      <h1 className="heading py-24">
        <span>About</span> Us
      </h1>
      <div className="flex flex-col items-center justify-center sm:flex-row">
        <div className="flex size-[350px] items-center justify-center rounded-lg bg-slate-800 p-8 sm:mx-auto sm:size-[500px]">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt="about-us"
              width={2000}
              height={2000}
              className="mx-16 size-[300px] object-cover sm:mx-0 sm:size-[450px]"
            />
          )}
        </div>

        <div className="flex-1 p-20">
          <h3 className="m-10 mb-4 text-5xl font-bold text-white">
            A few words .........
          </h3>
          <p className="m-10 mb-4 text-2xl text-white">
            SPORTIVO, the official sports club of Future Institute of
            Engineering and Management (FIEM), is a vibrant community united by
            passion and sportsmanship. It’s a platform where every student gets
            a chance to shine.
          </p>
          <p className="m-10 mb-4 text-2xl text-white">
            Twice a year, SPORTIVO’s spirit comes alive in grand spectacles.
            Xaplotes, our intra-college event, sees students from various
            departments compete in Football, Cricket, Shuttle Cup, Chess, and
            Table Tennis. It’s a platform for talents to emerge, friendships to
            solidify, and the college spirit to soar.
          </p>
          {isMobile && isMobileExpanded && (
            <p className="m-10 mb-4 text-2xl text-white">
              But SPORTIVO’s spirit doesn’t stop there. Our crown jewel,
              VIBGYOR, is an inter-college extravaganza that bursts with color,
              competition, and camaraderie. It’s not just about Football,
              Cricket, Chess, Table Tennis, Badminton, and Tug-O-War. VIBGYOR
              offers a spectrum of sporting and recreational activities, from
              Volleyball to Carrom, Dart Throwing to countless other engaging
              games. It’s a stage where FIEM opens its doors and welcomes the
              best athletic talent from neighboring colleges, celebrating
              sportsmanship and forging lasting bonds across institutions.
            </p>
          )}
          {isMobile && isMobileExpanded && (
            <p id="optional-text2" className="m-10 mb-4 text-2xl text-white">
              FIEM, one of Kolkata’s top private engineering colleges, is
              dedicated to the pursuit of excellence in teaching and providing
              knowledge. It offers unmatched learning experiences for students
              across a broad spectrum of academics. FIEM aims to create highly
              trained technical manpower in different disciplines of Engineering
              and Technology, and professional managers in the fields of General
              Management.
            </p>
          )}
          {!isMobile && (
            <p className="m-10 mb-4 text-2xl text-white">
              But SPORTIVO’s spirit doesn’t stop there. Our crown jewel,
              VIBGYOR, is an inter-college extravaganza that bursts with color,
              competition, and camaraderie. It’s not just about Football,
              Cricket, Chess, Table Tennis, Badminton, and Tug-O-War. VIBGYOR
              offers a spectrum of sporting and recreational activities, from
              Volleyball to Carrom, Dart Throwing to countless other engaging
              games. It’s a stage where FIEM opens its doors and welcomes the
              best athletic talent from neighboring colleges, celebrating
              sportsmanship and forging lasting bonds across institutions.
            </p>
          )}
          {isDesktopExpanded && !isMobile && (
            <p id="optional-text2" className="m-10 mb-4 text-2xl text-white">
              FIEM, one of Kolkata’s top private engineering colleges, is
              dedicated to the pursuit of excellence in teaching and providing
              knowledge. It offers unmatched learning experiences for students
              across a broad spectrum of academics. FIEM aims to create highly
              trained technical manpower in different disciplines of Engineering
              and Technology, and professional managers in the fields of General
              Management.
            </p>
          )}

          {isMobile && (
            <button
              id="mobile-button"
              className="m-10 rounded-lg bg-purple-600 px-6 py-3 text-3xl font-bold text-white hover:bg-purple-700"
              onClick={() => setIsMobileExpanded(!isMobileExpanded)}
            >
              {isMobileExpanded ? "Read Less" : "Read More"}
            </button>
          )}
          {!isMobile && (
            <button
              id="desktop-button"
              className="m-10 rounded-lg bg-purple-600 px-6 py-3 text-3xl font-bold text-white hover:bg-purple-700"
              onClick={() => setIsDesktopExpanded(!isDesktopExpanded)}
            >
              {isDesktopExpanded ? "Read Less" : "Read More"}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
