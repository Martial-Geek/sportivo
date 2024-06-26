import AboutUs from "@/components/AboutUs";
import Gallery from "@/components/Gallery";
import LandingPage from "@/components/LandingPage";
import Vibgyor from "@/components/Vibgyor";
import Xaplotes from "@/components/Xaplotes";
import Events from "@/components/Events";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import EventsModal from "@/components/EventsModal";

export default function Home() {
  return (
    <div>
      <EventsModal />
      <LandingPage />
      <AboutUs />
      <Xaplotes />
      <Vibgyor />
      <Gallery />
      <Events />
      <Contact />
      <Footer />
    </div>
  );
}
