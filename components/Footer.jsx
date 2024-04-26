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
    <section class="footer">
      <div class="box-container">
        <div class="box">
          <h3> quick links</h3>
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
          <a href="#contact">
            <FontAwesomeIcon icon={faArrowRight} /> Contact
          </a>
        </div>

        <div class="box">
          <h3> Contact Info</h3>
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
          <a href="https://maps.app.goo.gl/iJSvGN1hJF1qUFLU6">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> CCV8+85M, Sonarpur Station
            Rd, Mission Pally, Narendrapur, Kolkata, West Bengal 700150
          </a>
        </div>

        <div class="box">
          <h3> Social Media</h3>
          <a href="https://www.facebook.com/FIEMsportivo/">
            <FontAwesomeIcon icon={faFacebook} /> facebook
          </a>
          <a href="https://www.instagram.com/sportivoteamfuture?igsh=OWs1N3Bhc3JjN3hi">
            <FontAwesomeIcon icon={faInstagram} /> instagram
          </a>
        </div>
      </div>

      <div class="credit">
        created by <span>Team Sportivo </span> | all rights reserved
      </div>
    </section>
  );
};

export default Footer;
