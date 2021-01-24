import "./ImageGalleryItem.css";
import React from "react";

const ImageGalleryItem = ({ id, url, large, onOpen }) => {
  return (
    <li key={id} className="ImageGalleryItem">
      <img
        src={url}
        alt=""
        className="ImageGalleryItem-image"
        onClick={() => onOpen(large)}
      />
    </li>
  );
};

export default ImageGalleryItem;
