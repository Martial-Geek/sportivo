"use client";

import { useEffect, useState } from "react";
import { fetchImages } from "@/utils/getFirebaseImagePath";
import "../app/plainstyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShare, faEye } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    (async () => {
      const urls = await fetchImages("images/gallery");
      setImages(urls.map((url) => ({ src: url })));
    })();
  }, []);

  return (
    <section className="gallery" id="gallery">
      <h1 className="heading py-24">
        Our <span>Gallery</span>
      </h1>

      <div className="box-container">
        {images.map((image, index) => (
          <div className="box bg-slate-800" key={index}>
            <Image
              src={image.src}
              alt={`Image ${index}`}
              width={300}
              height={300}
            />
            <h3 className="title">Photos & Events</h3>
            <div className="icons flex justify-around">
              <FontAwesomeIcon icon={faHeart} className="size-11" />
              <FontAwesomeIcon icon={faShare} className="size-11" />
              <FontAwesomeIcon icon={faEye} className="size-11" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
