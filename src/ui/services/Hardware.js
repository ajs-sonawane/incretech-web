import React from "react";
import { Link } from "react-router-dom";

const Hardware = () => {
  return (
    <section className="section-items slide">
      <Link to="/" className="link">
        Home
      </Link>
      /
      <Link to="/technology" className="link">
        Technology
      </Link>
      <div className="container">
        <div className="content col">
          <h2 className="secondary">Computer Hardware & Networking</h2>
          <p className="info">
            You must ensure that the CCTV is installed at the right place to get
            the most out of it. CCTVs are one of the best and the most effective
            measures, you must get one if you have not done so already. We
            install a CCTV camera in residential and commercial areas as per the
            requirement.
          </p>
        </div>

        <div className="image-container col">
          <img
            src="https://images.pexels.com/photos/21905/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="info-image images"
          />
        </div>
      </div>
    </section>
  );
};

export default Hardware;
