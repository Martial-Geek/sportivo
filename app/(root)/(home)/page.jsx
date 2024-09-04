"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import LandingPage from "@/components/LandingPage";
import AboutUs from "@/components/AboutUs";

const Xaplotes = dynamic(() => import("@/components/Xaplotes"));
const Vibgyor = dynamic(() => import("@/components/Vibgyor"));
const EventsModal = dynamic(() => import("@/components/EventsModal"), {
  ssr: false,
});

export default function Home() {
  const [loadGallery, setLoadGallery] = useState(false);
  const [loadEvents, setLoadEvents] = useState(false);
  const [loadSponsors, setLoadSponsors] = useState(false);
  const [loadContact, setLoadContact] = useState(false);
  const [loadFooter, setLoadFooter] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            switch (entry.target.id) {
              case "gallery":
                setLoadGallery(true);
                break;
              case "events":
                setLoadEvents(true);
                break;
              case "sponsors":
                setLoadSponsors(true);
                break;
              case "contact":
                setLoadContact(true);
                break;
              case "footer":
                setLoadFooter(true);
                break;
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(document.getElementById("gallery"));
    observer.observe(document.getElementById("events"));
    observer.observe(document.getElementById("sponsors"));
    observer.observe(document.getElementById("contact"));
    observer.observe(document.getElementById("footer"));

    return () => observer.disconnect();
  }, []);

  const Gallery = loadGallery
    ? dynamic(() => import("@/components/Gallery"))
    : () => null;
  const Events = loadEvents
    ? dynamic(() => import("@/components/Events"))
    : () => null;
  const Sponsors = loadSponsors
    ? dynamic(() => import("@/components/Sponsors"))
    : () => null;
  const Contact = loadContact
    ? dynamic(() => import("@/components/Contact"))
    : () => null;
  const Footer = loadFooter
    ? dynamic(() => import("@/components/Footer"))
    : () => null;

  return (
    <div>
      <EventsModal />
      <LandingPage />
      <AboutUs />
      <Xaplotes />
      <Vibgyor />
      <div id="gallery">
        <Gallery />
      </div>
      <div id="events">
        <Events />
      </div>
      <div id="sponsors">
        <Sponsors />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}
