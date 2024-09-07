"use client";

import dynamic from "next/dynamic";
// Dynamic imports
const LandingPage = dynamic(() => import("@/components/LandingPage"));
const AboutUs = dynamic(() => import("@/components/AboutUs"));
const Xaplotes = dynamic(() => import("@/components/Xaplotes"));
const Vibgyor = dynamic(() => import("@/components/Vibgyor"));
const EventsModal = dynamic(() => import("@/components/EventsModal"), {
  ssr: false,
});
const Gallery = dynamic(() => import("@/components/Gallery"));
const Events = dynamic(() => import("@/components/Events"));
const Sponsors = dynamic(() => import("@/components/Sponsors"));
const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <>
      <div>
        <EventsModal />
        <LandingPage />
        <AboutUs />
        <Xaplotes />
        <Vibgyor />
        <Gallery />
        <Events />
        <Sponsors />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
