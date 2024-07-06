import React from "react";
import ImageContainer from "../components/ImageContainer";
import { Link } from "react-router-dom";
import "../../styles/Technology.css";

const Technology = () => {
  return (
    <section className="section-services ">
      <Link to="/" className="link">
        Home
      </Link>
      <h2 className="heading-secondary">Youth Engineer</h2>
      <div className="grid">
        <ImageContainer title="CCTV Survillence" link="/camera" id={1} />

        <ImageContainer
          title="Computer Hardware & Networking"
          link="/hardware"
          id={2}
        />
        <ImageContainer title="Centralised WIFI" link="/wifi" id={3} />
        <ImageContainer title="Biometric" link="/biometric" id={4} />
        <ImageContainer title="Electric Work" link="/electricwork" id={5} />

        <ImageContainer
          title="Mobile Signal Booster"
          link="/singlebooster"
          id={6}
        />
        <ImageContainer title="EPBX & Intercom" link="/intercom" id={7} />
      </div>
    </section>
  );
};

export default Technology;
