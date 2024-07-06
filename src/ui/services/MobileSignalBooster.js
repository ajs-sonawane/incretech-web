import React from "react";
import { Link } from "react-router-dom";

const MobileSignalBooster = () => {
  return (
    <section className="section-items slide">
      <Link to="/" className="link">
        Home
      </Link>
      /
      <Link to="/technology" className="link">
        Technology
      </Link>
      <div className="container ">
        <div className="content col">
          <h2 className="secondary">Mobile Signal Booster</h2>
          <p className="info">
            Mobile signal boosters are devices that provide strength to a weak
            signal by amplifying the carrier frequency signal. Due to the
            presence of numerous dead spots where there is no signal or very
            poor signal, mobile signal boosters help wireless network providers
            to improve coverage in such areas
          </p>
        </div>

        <div className="col image-container">
          <img
            src="https://images.pexels.com/photos/21905/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="info-image images"
          />
        </div>
      </div>
    </section>
  );
};

export default MobileSignalBooster;
