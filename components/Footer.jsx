import React from "react";

const Footer = () => {
  return (
    <section class="footer">
      <div class="box-container">
        <div class="box">
          <h3> quick links</h3>
          <a href="#home">
            <i class="fas fa-arrow-right"></i>home
          </a>
          <a href="#about">
            <i class="fas fa-arrow-right"></i>aboutus
          </a>
          <a href="#xaplotes">
            <i class="fas fa-arrow-right"></i>xaplotes
          </a>
          <a href="#vibgyor">
            <i class="fas fa-arrow-right"></i>vibgyor
          </a>
          <a href="#gallery">
            <i class="fas fa-arrow-right"></i>gallery
          </a>
          <a href="#contact">
            <i class="fas fa-arrow-right"></i>contact
          </a>
        </div>

        <div class="box">
          <h3> Contact Info</h3>
          <a href="#">
            <i class="fas fa-phone"></i>+91 9836489056
          </a>
          <a href="#">
            <i class="fas fa-phone"></i>+91 6297538477
          </a>
          <a href="#">
            <i class="fas fa-phone"></i>+91 8961677543
          </a>
          <a href="">
            <i class="fas fa-envelope"></i>sportivo@teamfuture.in
          </a>
          <a href="https://maps.app.goo.gl/iJSvGN1hJF1qUFLU6">
            <i class="fas fa-map-marker-alt"></i>CCV8+85M, Sonarpur Station Rd,
            Mission Pally, Narendrapur, Kolkata, West Bengal 700150
          </a>
        </div>

        <div class="box">
          <h3> Social Media</h3>
          <a href="https://www.facebook.com/FIEMsportivo/">
            <i class="fab fa-facebook"></i>facebook
          </a>
          <a href="https://www.instagram.com/sportivoteamfuture?igsh=OWs1N3Bhc3JjN3hi">
            <i class="fab fa-instagram"></i>instagram
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
