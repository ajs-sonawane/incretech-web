import React from "react";
import { Link } from "react-router-dom";

const Intercom = () => {
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
          <h2 className="secondary">EPBX & Intercom</h2>
          <p className="info">
            EPBX or epbax is eloctronic private branch automatic exchange. It is
            largely used in all types of organisations and offices that contain
            a number of phones. This helps the staff to talk among themselves
            free of cost Intercom is a Conversational Relationship Platform. It
            shows you who is using your product or website and makes it easy to
            personally communicate with them with targeted content,
            behavior-driven messages, and conversational support.
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

export default Intercom;
