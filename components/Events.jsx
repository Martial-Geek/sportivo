"use client";

import { useEffect, useState } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import storage from "@/firebaseConfig";
import Link from "next/link"; // Import Link from Next.js
import "../app/plainstyles.css";
import Image from "next/image";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const storageRef = ref(storage, "assets/events");
    listAll(storageRef)
      .then((res) => {
        const promises = res.items.map((itemRef, index) => {
          const eventName = getEventName(index);
          return getDownloadURL(itemRef).then((url) => ({
            name: eventName,
            imageSrc: url,
            id: eventName.toLowerCase().replace(/\s/g, "-"), // Generate id based on event name
          }));
        });

        Promise.all(promises)
          .then((eventData) => {
            setEvents(eventData);
          })
          .catch((error) => {
            console.error("Error getting download URLs:", error);
          });
      })
      .catch((error) => {
        console.error("Error listing events:", error);
      });
  }, []);

  const getEventName = (index) => {
    switch (index) {
      case 0:
        return "Kabaddi";
      case 1:
        return "Badminton";
      case 2:
        return "Chess";
      case 3:
        return "Futsal";
      case 4:
        return "Gully Cricket";
      case 5:
        return "Table Tennis";
      default:
        return `Event ${index + 1}`;
    }
  };

  return (
    <section className="events" id="events">
      <h1 className="heading my-32 text-7xl">
        Our <span>Events</span>
      </h1>
      <div className="flex flex-col">
        <div className="grid grid-cols-1 gap-16 sm:grid-cols-3 sm:gap-8">
          {events.map((event, index) => (
            <div
              className="mx-24 flex flex-col gap-20 rounded-md bg-[#1e293b] p-8 sm:mx-0 sm:gap-12 sm:rounded-xl"
              key={index}
            >
              <h2 className="font-montserrat mx-auto text-4xl font-semibold text-white">
                {event.name.toUpperCase()}
              </h2>
              <Image
                src={event.imageSrc}
                alt={`${event.name} Image`}
                width={300}
                height={300}
                className="mx-auto h-[20vh] w-[50vw] rounded-md sm:h-[25vh] sm:w-[15vw] sm:rounded-[3rem]"
              />

              <SignedOut>
                <SignInButton className="font-roboto mx-auto w-fit rounded-xl bg-[#33465d] px-8 py-4 text-3xl font-semibold text-white hover:bg-blue-700">
                  Sign In to Register
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <Link
                  href={`/event-reg/${event.id}`}
                  passHref
                  className="mx-auto"
                >
                  <button
                    id={`gullycricketregisterBtn${index + 1}`}
                    className="font-roboto mx-auto w-fit rounded-xl bg-[#33465d] px-8 py-4 text-3xl font-semibold text-white hover:bg-blue-700"
                  >
                    Register
                  </button>
                </Link>
              </SignedIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
