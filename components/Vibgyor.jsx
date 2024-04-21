import Image from "next/image";
import React from "react";
import "../app/plainstyles.css";

const Vibgyor = () => {
  return (
    <section class="vibgyor" id="vibgyor">
      <h1 class="heading">
        <span>V</span>ibgyor
      </h1>
      <div class="row">
        <div class="image">
          <Image
            src={"/assets/vib.gif"}
            width={500}
            height={500}
            alt="vibgyor"
          />
        </div>

        <div class="content">
          <h3>Play. Bond. Celebrate</h3>
          <p>
            VIBGYOR, a vibrant celebration of sports, lights up our campus each
            year, attracting the largest student gathering in the City of Joy.
            Students from colleges not just in Kolkata, but from far and wide,
            come together to compete in a diverse range of sporting events. From
            Football and Cricket to Badminton and Tug-O-War, the spirit of
            competition is alive and thriving. But VIBGYOR is more than just a
            competition; it serves as a cultural bridge, creating lasting bonds
            and sparking unforgettable memories, all under the banner of
            sportsmanship and shared passion.
          </p>
          <p>
            The events that make up the VIBGYOR sports fest are Football,
            Cricket, Badminton, Chess, Table Tennis, Volleyball, and Kabaddi.
            Each of these events brings its own unique excitement to the fest,
            making VIBGYOR a truly diverse and thrilling experience for all
            participants and spectators.
          </p>
          <a href="#vibgyor" class="btn">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Vibgyor;
