"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (!session) {
      router.push("/sign-in");
    }
  }, [session, status, router]);

  return (
    <>
      {session && (
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
      )}
    </>
  );
}
