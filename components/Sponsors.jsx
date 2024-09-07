import React, { useState, useEffect } from "react";
import Image from "next/image";
import { fetchImages } from "@/utils/getFirebaseImagePath";

const Sponsors = () => {
  const [imgUrls, setImgUrls] = useState([]);

  useEffect(() => {
    (async () => {
      const urls = await fetchImages("images/sponsers");
      setImgUrls(urls);
    })();
  }, []);

  return (
    /* eslint-disable-next-line tailwindcss/no-custom-classname */
    <section className="sponsers" id="sponsers">
      <h1 className="heading my-32 text-7xl">
        Our <span>Sponsors</span>
      </h1>
      <div
        id="sponsorList"
        className="mx-auto flex flex-wrap justify-center gap-10 py-36"
      >
        {imgUrls.map((img, index) => (
          <div key={index} className="relative size-[30rem]">
            <Image
              src={img}
              alt={`Sponsor ${index}`}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
