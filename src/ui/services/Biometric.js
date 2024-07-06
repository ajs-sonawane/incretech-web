import React from "react";
import { Link } from "react-router-dom";

const Biometric = () => {
  return (
    <section className="section-items slide">
      <Link to="/" className="link">
        Home
      </Link>
      /
      <Link to="/technology" className="link">
        Technology
      </Link>
      <div className="container padding-y">
        <div className="content col">
          <h2 className="secondary">Biometric</h2>
          <p className="text">
            A biometric device is a security identification and authentication
            device. Such devices use Mobile Signal Booster:- automated methods
            of verifying or recognising the identity of a living person based on
            a physiological or behavioral characteristic include fingerprints
            biometric device.
          </p>
        </div>

        <div className=" image-container col">
          <img
            src="https://images.unsplash.com/photo-1585079374502-415f8516dcc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="info-image images"
          />
        </div>
      </div>
    </section>
  );
};

export default Biometric;
