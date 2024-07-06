import React from "react";
import { Link } from "react-router-dom";

const Services = ({ technology, id, name, t1, t2, t3, t4, t5, t6, last }) => {
  return (
    <Link
      to={technology}
      className={`link image-container-tech-${id} image-overlay`}
    >
      <div className={`overlay-content ${last}`}>
        <h5>{name}</h5>
        <p className="overlay-text">{t1}</p>
        <p className="overlay-text">{t2}</p>
        <p className="overlay-text">{t3}</p>
        <p className="overlay-text">{t4}</p>
        <p className="overlay-text">{t5}</p>
        <p className="overlay-text">{t6}</p>
      </div>
    </Link>
  );
};

export default Services;
