import React from "react";
import { Link } from "react-router-dom";

const ElectricWork = () => {
  return (
    <section className="section-items slide">
      <Link to="/" className="link">
        Home
      </Link>{" "}
      /
      <Link to="/technology" className="link">
        Technology
      </Link>
      <div className="container">
        <div className="content col">
          <h2 className="secondary">Electric Work</h2>
          <p className="info">
            Electric work performing or carrying out on an electrical
            installing, altering, maintaining, or extending an electrical wiring
            system and the appurtenances, apparatus, or equipment used in
            connection in or on, outside, or attached to a building, residence,
            structure, property, or premises & maintenance of all electrical
            equipment.
          </p>
          <p className="info"></p>
        </div>
        <div className="image-container col">
          <img
            src="https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="info-image images"
          />
        </div>
      </div>
    </section>
  );
};

export default ElectricWork;
