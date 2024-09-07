"use client";

import { useState, useEffect } from "react";
import "../app/plainstyles.css";
import { ref, getDownloadURL } from "firebase/storage";
import storage from "@/firebaseConfig";
import Image from "next/image";
import Link from "next/link";

const Xaplotes = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);

  useEffect(() => {
    const imageRef = ref(storage, "assets/xap.gif");

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
    <section id="xaplotes">
      <h1 className="heading py-24">
        <span>X</span>aplotes
      </h1>
      <div className="flex flex-col items-center justify-center sm:flex-row">
        <div className="flex size-[350px] items-center justify-center rounded-lg bg-slate-800 p-8">
          {imageUrl && (
            <Image
              src={imageUrl}
              className="object-cover"
              alt="xap"
              width={450}
              height={450}
            />
          )}
        </div>

        <div className="flex-1 p-20">
          <h3 className="m-10 mb-4 text-5xl font-bold text-white">
            Where Sparks Fly and Friendships Soar!
          </h3>
          <p className="m-10 mb-4 text-2xl text-white">
            Xaplotes, our electrifying intra-college event, ignites the campus
            with friendly rivalries as students from across departments battle
            it out in Football, Cricket, Shuttle Cup, and Table Tennis. This
            event is a platform where hidden talents bloom and friendships forge
            in the heat of competition. The spirit of the college soars as
            Xaplotes transforms the ordinary into an unforgettable spectacle of
            sportsmanship and camaraderie.
          </p>
          {/* Default View on Desktop  */}
          {!isMobile && (
            <p className="m-10 mb-4 text-2xl text-white">
              The events under the banner of Xaplotes include Xaplotes Football,
              Xaplotes Cricket, Xaplotes Shuttle Cup, and Xaplotes Table Tennis.
              Each of these events brings its own unique flavor to the
              competition, making Xaplotes a diverse and exciting experience for
              all participants and spectators alike.
            </p>
          )}
          {/* Only Visible on mobile when expanded  */}
          {isMobile && isMobileExpanded && (
            <p className="m-10 mb-4 text-2xl text-white">
              The events under the banner of Xaplotes include Xaplotes Football,
              Xaplotes Cricket, Xaplotes Shuttle Cup, and Xaplotes Table Tennis.
              Each of these events brings its own unique flavor to the
              competition, making Xaplotes a diverse and exciting experience for
              all participants and spectators alike.
            </p>
          )}
          {/* Read More/Less Button for mobile  */}
          {isMobile && (
            <button
              className="m-10 rounded-lg bg-purple-600 px-6 py-3 text-3xl font-bold text-white hover:bg-purple-700"
              onClick={() => setIsMobileExpanded(!isMobileExpanded)}
            >
              {isMobileExpanded ? "Read Less" : "Read More"}
            </button>
          )}
          {/* Default Button for Desktop  */}
          {!isMobile && (
            <Link href="/#events">
              <button className="m-10 rounded-lg bg-purple-600 px-6 py-3 text-3xl font-bold text-white hover:bg-purple-700">
                Check Out Events!
              </button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default Xaplotes;
