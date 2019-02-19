import React from "react";
import "./imageList.css"

const ImageList = props => {
  const images = props.images.map(({ description, id, urls }) => {
    return <img key={id} src={urls.regular} alt={description} />;
  });
  return (
  <div>
      <div className="images-list">{images}</div>
  </div>
  );
};

export default ImageList;
