import React from "react";
import "../app/plainstyles.css";
import Image from "next/image";

const Xaplotes = () => {
  return (
    <section class="xaplotes" id="xaplotes">
      <h1 class="heading">
        <span>X</span>aplotes
      </h1>
      <div class="row">
        <div class="image">
          <Image src={"/assets/xap.gif"} width={500} height={500} alt="xap" />
          {/* <img src="assets/xap.gif" alt="" /> */}
        </div>

        <div class="content">
          <h3>Where Sparks Fly and Friendships Soar!</h3>
          <p>
            Xaplotes, our electrifying intra-college event, ignites the campus
            with friendly rivalries as students from across departments battle
            it out in Football, Cricket, Shuttle Cup, and Table Tennis. This
            event is a platform where hidden talents bloom and friendships forge
            in the heat of competition. The spirit of the college soars as
            Xaplotes transforms the ordinary into an unforgettable spectacle of
            sportsmanship and camaraderie.
          </p>
          <p>
            The events under the banner of Xaplotes include Xaplotes Football,
            Xaplotes Cricket, Xaplotes Shuttle Cup, and Xaplotes Table Tennis.
            Each of these events brings its own unique flavor to the
            competition, making Xaplotes a diverse and exciting experience for
            all participants and spectators alike.
          </p>
          <a href="#xaplotes" class="btn">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Xaplotes;
