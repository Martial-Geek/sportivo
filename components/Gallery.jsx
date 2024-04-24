"use client";

import { useEffect, useState } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import storage from "@/firebaseConfig";
import "../app/plainstyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShare, faEye } from "@fortawesome/free-solid-svg-icons";
// import imageInfo from "@/constants/gallery";
import Image from "next/image";

const Gallery = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const galleryRef = ref(storage, "images/gallery");
    listAll(galleryRef)
      .then((res) => {
        const promises = res.items.map((itemRef) => getDownloadURL(itemRef));
        Promise.all(promises)
          .then((urls) => {
            setImages(urls.map((url) => ({ src: url })));
          })
          .catch((error) => {
            console.error("Error getting download URLs:", error);
          });
      })
      .catch((error) => {
        console.error("Error listing images:", error);
      });
  }, []);

  return (
    <section class="gallery" id="gallery">
      <h1 class="heading">
        Our <span>Gallery</span>
      </h1>

      <div className="box-container">
        {images.map((image, index) => (
          <div className="box" key={index}>
            <Image
              src={image.src}
              alt={`Image ${index}`}
              width={300}
              height={300}
            />
            <h3 className="title">Photos & Events</h3>
            <div className="icons flex justify-around">
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
