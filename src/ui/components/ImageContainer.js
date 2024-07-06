import React from "react";
import { Link } from "react-router-dom";
// import "../../styles/Images.css";

const ImageContainer = ({ title, link, id }) => {
  return (
    <Link to={link} className={`services image-container-services-${id}`}>
      <div className="sub-text">{title}</div>
    </Link>
  );
};

export default ImageContainer;
