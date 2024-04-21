import React from "react";
import "../app/plainstyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShare, faEye } from "@fortawesome/free-solid-svg-icons";
import imageInfo from "@/constants/gallery";
import Image from "next/image";

const Gallery = () => {
  return (
    <section class="gallery" id="gallery">
      <h1 class="heading">
        Our <span>Gallery</span>
      </h1>

      <div class="box-container">
        {imageInfo.map((image, index) => (
          <div className="box" key={index}>
            <Image src={image.src} alt={image.title} width={300} height={300} />
            <h3 class="title">{image.title}</h3>
            <div class="icons flex justify-around">
              <FontAwesomeIcon icon={faHeart} className="size-12" />
              <FontAwesomeIcon icon={faShare} className="size-12" />
              <FontAwesomeIcon icon={faEye} className="size-12" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
