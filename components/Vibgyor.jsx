"use client";

import { useState, useEffect } from "react";
import "../app/plainstyles.css";
import { ref, getDownloadURL } from "firebase/storage";
import storage from "@/firebaseConfig";
import Image from "next/image";
import Link from "next/link";

const Vibgyor = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);

  useEffect(() => {
    const imageRef = ref(storage, "assets/vib.gif");

    console.log(imageRef);

    getDownloadURL(imageRef)
      .then((url) => {
        setImageUrl(url);
      })
      .catch((error) => {
        console.error("Error getting download URL:", error);
      });

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
    <section class="vibgyor" id="vibgyor">
      <h1 class="heading">
        <span>V</span>ibgyor
      </h1>

      <div class="flex flex-col items-center justify-center sm:flex-row">
        <div class="flex size-[400px] items-center justify-center rounded-lg bg-slate-800 p-8">
          <Image
            src={imageUrl}
            class="object-cover"
            alt="vibgyor"
            width={500}
            height={500}
          />
        </div>

        <div class="flex-1 p-20">
          <h3 class="m-10 mb-4 text-5xl font-bold text-white">
            Play. Bond. Celebrate
          </h3>
          <p class="m-10 mb-4 text-2xl text-white">
            VIBGYOR, a vibrant celebration of sports, lights up our campus each
            year, attracting the largest student gathering in the City of Joy.
            Students from colleges not just in Kolkata, but from far and wide,
            come together to compete in a diverse range of sporting events. From
            Football and Cricket to Badminton and Tug-O-War, the spirit of
            competition is alive and thriving. But VIBGYOR is more than just a
            competition; it serves as a cultural bridge, creating lasting bonds
            and sparking unforgettable memories, all under the banner of
            sportsmanship and shared passion.
          </p>
          {/* Default visible on desktop  */}
          {!isMobile && (
            <p class="m-10 mb-4 text-2xl text-white">
              The events that make up the VIBGYOR sports fest are Football,
              Cricket, Badminton, Chess, Table Tennis, Volleyball, and Kabaddi.
              Each of these events brings its own unique excitement to the fest,
              making VIBGYOR a truly diverse and thrilling experience for all
              participants and spectators.
            </p>
          )}
          {/* Visible on mobile only when expanded */}
          {isMobile && isMobileExpanded && (
            <p class="m-10 mb-4 text-2xl text-white">
              The events that make up the VIBGYOR sports fest are Football,
              Cricket, Badminton, Chess, Table Tennis, Volleyball, and Kabaddi.
              Each of these events brings its own unique excitement to the fest,
              making VIBGYOR a truly diverse and thrilling experience for all
              participants and spectators.
            </p>
          )}
          {/* Read More/Less Button for mobile  */}
          {isMobile && (
            <button
              class="m-10 rounded-lg bg-purple-600 px-6 py-3 text-3xl font-bold text-white hover:bg-purple-700"
              onClick={() => setIsMobileExpanded(!isMobileExpanded)}
            >
              {isMobileExpanded ? "Read Less" : "Read More"}
            </button>
          )}
          {/* Default Button for Desktop  */}
          {!isMobile && (
            <Link href="/#events">
              <button class="m-10 rounded-lg bg-purple-600 px-6 py-3 text-3xl font-bold text-white hover:bg-purple-700">
                Check Out Events!
              </button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default Vibgyor;
