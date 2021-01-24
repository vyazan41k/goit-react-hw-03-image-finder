import "./ImageGallery.css";
import React from "react";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ data, open }) => {
  return (
    <ul className="ImageGallery">
      {data.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          url={webformatURL}
          large={largeImageURL}
          onOpen={open}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
