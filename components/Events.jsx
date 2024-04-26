"use client";

import { useEffect, useState } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import storage from "@/firebaseConfig";
import "../app/plainstyles.css";
import Image from "next/image";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const storageRef = ref(storage, "assets/events");
    listAll(storageRef)
      .then((res) => {
        const promises = res.items.map((itemRef) => getDownloadURL(itemRef));
        Promise.all(promises)
          .then((urls) => {
            setEvents(
              urls.map((url, index) => ({
                name: `Event ${index + 1}`,
                imageSrc: url,
              }))
            );
          })
          .catch((error) => {
            console.error("Error getting download URLs:", error);
          });
      })
      .catch((error) => {
        console.error("Error listing events:", error);
      });
  }, []);

  return (
    <section className="events" id="events">
      <h1 className="heading my-32 text-7xl">
        Our <span>Events</span>
      </h1>
      <div className="flex flex-col">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {events.map((event, index) => (
            <div
              className="flex flex-col gap-12 rounded-xl bg-[#1e293b] p-8"
              key={index}
            >
              <h2 className="font-montserrat mx-auto text-4xl font-semibold text-white">
                {event.name}
              </h2>
              <Image
                src={event.imageSrc}
                alt={`Event ${index + 1} Image`}
                width={300}
                height={300}
                className="mx-auto h-[20vh] w-[50vw] rounded-[3rem] sm:h-[25vh] sm:w-[15vw]"
              />

              <button
                id="gullycricketregisterBtn"
                className="font-roboto mx-auto w-fit rounded-xl bg-[#33465d] px-8 py-4 text-3xl font-semibold text-white hover:bg-blue-700"
              >
                Register
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
