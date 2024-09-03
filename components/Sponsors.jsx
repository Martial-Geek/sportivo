import React from "react";
import Image from "next/image";

const Sponsors = () => {
  return (
    <section className="sponsers" id="sponsers">
      <h1 className="heading my-32 text-7xl">
        Our <span>Sponsors</span>
      </h1>
      <div
        id="sponsorList"
        className="mx-auto flex flex-col items-center gap-10 py-20 sm:flex-col sm:py-36 lg:flex-row lg:justify-around"
      >
        <div className="relative size-[30rem]">
          <Image
            src="/assets/sponsors/edugraph.jpg"
            alt="Sponsor 2"
            fill
            className="object-contain"
          />
        </div>
        <div className="relative size-[30rem]">
          <Image
            src="/assets/sponsors/Decathlon.jpg"
            alt="Sponsor 1"
            fill
            className="object-contain"
          />
        </div>
        <div className="relative size-[30rem]">
          <Image
            src="/assets/sponsors/red-fm.jpg"
            alt="Sponsor 3"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
