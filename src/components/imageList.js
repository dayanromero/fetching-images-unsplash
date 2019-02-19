import React from "react";
import ImageCard from './imageCard';
import "./imageList.css";

const ImageList = props => {
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />
  });
  return (
  <div>
      <div className="images-list">{images}</div>
  </div>
  );
};

export default ImageList;
