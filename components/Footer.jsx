import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <section className="footer">
      <div
        className="flex flex-col gap-10 text-3xl text-white sm:flex-row sm:justify-around"
        id="container"
      >
        <div
          className="flex flex-col gap-6 border-x-0 border-b border-t-0 border-solid border-[#222] pb-8 text-left xs:text-left sm:border-0 sm:text-center"
          id="quick-links"
        >
          <h3 className="font-sans text-4xl font-semibold"> quick links</h3>
          <a href="#home">
            <FontAwesomeIcon icon={faArrowRight} /> Home
          </a>
          <a href="#about">
            <FontAwesomeIcon icon={faArrowRight} /> Aboutus
          </a>
          <a href="#xaplotes">
            <FontAwesomeIcon icon={faArrowRight} /> Xaplotes
          </a>
          <a href="#vibgyor">
            <FontAwesomeIcon icon={faArrowRight} /> Vibgyor
          </a>
          <a href="#gallery">
            <FontAwesomeIcon icon={faArrowRight} /> Gallery
          </a>
          <a href="#events">
            <FontAwesomeIcon icon={faArrowRight} /> Events
          </a>
          <a href="#contact">
            <FontAwesomeIcon icon={faArrowRight} /> Contact
          </a>
        </div>

        <div
          className="flex flex-col gap-6 border-x-0 border-b border-t-0 border-solid border-[#222] pb-8 text-left xs:text-left sm:border-0 sm:text-center"
          id="contact-info"
        >
          <h3 className="font-sans text-4xl font-semibold"> Contact Info</h3>
          <a href="#">
            <FontAwesomeIcon icon={faPhone} /> +91 9836489056
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faPhone} /> +91 6297538477
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faPhone} /> +91 8961677543
          </a>
          <a href="">
            <FontAwesomeIcon icon={faEnvelope} /> sportivo@teamfuture.in
          </a>
          <a
            href="https://maps.app.goo.gl/iJSvGN1hJF1qUFLU6"
            className="w-full sm:w-[40rem]"
          >
            <FontAwesomeIcon icon={faMapMarkerAlt} /> CCV8+85M, Sonarpur Station
            Rd, Mission Pally, Narendrapur, Kolkata, West Bengal 700150
          </a>
        </div>
        <div
          className="flex flex-col gap-6 text-left xs:text-left sm:text-center"
          id="social-media"
        >
          <h3 className="font-sans text-4xl font-semibold"> Social Media</h3>
          <a href="https://www.facebook.com/FIEMsportivo/">
            <FontAwesomeIcon icon={faFacebook} /> facebook
          </a>
          <a href="https://www.instagram.com/sportivoteamfuture?igsh=OWs1N3Bhc3JjN3hi">
            <FontAwesomeIcon icon={faInstagram} /> instagram
          </a>
        </div>
      </div>

      <div className="credit">
        created by <span>Team Sportivo </span> | all rights reserved
      </div>
    </section>
  );
};

export default Footer;
