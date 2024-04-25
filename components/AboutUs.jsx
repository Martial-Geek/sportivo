"use client";

import { useState, useEffect } from "react";
import "../app/plainstyles.css";
import { ref, getDownloadURL } from "firebase/storage";
import storage from "@/firebaseConfig";

import Image from "next/image";

const AboutUs = () => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const imageRef = ref(storage, "assets/aboutus.JPG");

    console.log(imageRef);

    getDownloadURL(imageRef)
      .then((url) => {
        setImageUrl(url);
      })
      .catch((error) => {
        console.error("Error getting download URL:", error);
      });
  }, []);
  return (
    <section class="aboutus" id="aboutus">
      <h1 class="heading">
        <span>About</span> Us
      </h1>
      <div class="row">
        <div class="image bg-slate-800">
          {imageUrl && (
            <Image src={imageUrl} alt="about-us" width={2000} height={2000} />
          )}
        </div>

        <div class="content px-16">
          <h3>A few words .........</h3>
          <p>
            SPORTIVO, the official sports club of Future Institute of
            Engineering and Management (FIEM), is a vibrant community united by
            passion and sportsmanship. It’s a platform where every student gets
            a chance to shine.
          </p>
          <p>
            Twice a year, SPORTIVO’s spirit comes alive in grand spectacles.
            Xaplotes, our intra-college event, sees students from various
            departments compete in Football, Cricket, Shuttle Cup, Chess, and
            Table Tennis. It’s a platform for talents to emerge, friendships to
            solidify, and the college spirit to soar.
          </p>
          <p>
            But SPORTIVO’s spirit doesn’t stop there. Our crown jewel, VIBGYOR,
            is an inter-college extravaganza that bursts with color,
            competition, and camaraderie. It’s not just about Football, Cricket,
            Chess, Table Tennis, Badminton, and Tug-O-War. VIBGYOR offers a
            spectrum of sporting and recreational activities, from Volleyball to
            Carrom, Dart Throwing to countless other engaging games. It’s a
            stage where FIEM opens its doors and welcomes the best athletic
            talent from neighboring colleges, celebrating sportsmanship and
            forging lasting bonds across institutions.
          </p>
          <p>
            FIEM, one of Kolkata’s top private engineering colleges, is
            dedicated to the pursuit of excellence in teaching and providing
            knowledge. It offers unmatched learning experiences for students
            across a broad spectrum of academics. FIEM aims to create highly
            trained technical manpower in different disciplines of Engineering
            and Technology, and professional managers in the fields of General
            Management.
          </p>

          {/* <a href="#aboutus" class="btn">
            Read More
          </a> */}
          <button className="rounded-lg bg-purple-600 px-6 py-3 text-3xl font-bold text-white hover:bg-purple-700">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
