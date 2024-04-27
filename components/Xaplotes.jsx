"use client";

import { useState, useEffect } from "react";
import "../app/plainstyles.css";
import { ref, getDownloadURL } from "firebase/storage";
import storage from "@/firebaseConfig";
import Image from "next/image";

const Xaplotes = () => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const imageRef = ref(storage, "assets/xap.gif");

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
    <section class="xaplotes" id="xaplotes">
      <h1 class="heading">
        <span>X</span>aplotes
      </h1>
      <div class="flex flex-col items-center justify-center sm:flex-row">
        <div class="flex size-[400px] items-center justify-center rounded-lg bg-slate-800 p-8">
          <Image
            src={imageUrl}
            class="object-cover"
            alt="xap"
            width={450}
            height={450}
          />
        </div>

        <div class="flex-1 p-20">
          <h3 class="m-10 mb-4 text-5xl font-bold text-white">
            Where Sparks Fly and Friendships Soar!
          </h3>
          <p class="m-10 mb-4 text-2xl text-white">
            Xaplotes, our electrifying intra-college event, ignites the campus
            with friendly rivalries as students from across departments battle
            it out in Football, Cricket, Shuttle Cup, and Table Tennis. This
            event is a platform where hidden talents bloom and friendships forge
            in the heat of competition. The spirit of the college soars as
            Xaplotes transforms the ordinary into an unforgettable spectacle of
            sportsmanship and camaraderie.
          </p>
          <p class="m-10 mb-4 text-2xl text-white">
            The events under the banner of Xaplotes include Xaplotes Football,
            Xaplotes Cricket, Xaplotes Shuttle Cup, and Xaplotes Table Tennis.
            Each of these events brings its own unique flavor to the
            competition, making Xaplotes a diverse and exciting experience for
            all participants and spectators alike.
          </p>
          <button class="m-10 rounded-lg bg-purple-600 px-6 py-3 text-3xl font-bold text-white hover:bg-purple-700">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Xaplotes;
