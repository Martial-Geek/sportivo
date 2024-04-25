"use client";

import { useState, useEffect } from "react";
import "../app/plainstyles.css";
import { ref, getDownloadURL } from "firebase/storage";
import storage from "@/firebaseConfig";
import Image from "next/image";

const Vibgyor = () => {
  const [imageUrl, setImageUrl] = useState("");

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
  }, []);
  return (
    <section class="vibgyor" id="vibgyor">
      <h1 class="heading">
        <span>V</span>ibgyor
      </h1>
      <div class="row">
        <div className="image bg-slate-800">
          <Image src={imageUrl} width={500} height={500} alt="vibgyor" />
        </div>

        <div className="content mx-4 my-1">
          <h3>Play. Bond. Celebrate</h3>
          <p>
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
          <p>
            The events that make up the VIBGYOR sports fest are Football,
            Cricket, Badminton, Chess, Table Tennis, Volleyball, and Kabaddi.
            Each of these events brings its own unique excitement to the fest,
            making VIBGYOR a truly diverse and thrilling experience for all
            participants and spectators.
          </p>
          <button className="rounded-lg bg-purple-600 px-6 py-3 text-3xl font-bold text-white hover:bg-purple-700">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Vibgyor;
