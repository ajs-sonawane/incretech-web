import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Contact.css";
import { useState } from "react";
import { send } from "emailjs-com";

const Contact = ({ toSend, handleChange, onSubmit }) => {
  return (
    <section className="section-container-contact">
      <Link to="/" className="link">
        Home
      </Link>
      /
      <Link to="/contact" className="link">
        Contact us
      </Link>
      <form className="form-container" onSubmit={onSubmit}>
        <div className="input-container">
          <input
            type="text"
            placeholder="Name"
            name="from_name"
            value={toSend.from_name}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Phone"
            name="phone"
            onChange={handleChange}
          />
        </div>
        <input
          type="text"
          placeholder="Email"
          className="input"
          name="email"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Subject"
          className="input"
          name="subject"
          onChange={handleChange}
        />
        <textarea
          placeholder="Message"
          name="message"
          rows="20"
          className="input"
          value={toSend.message}
          onChange={handleChange}
        ></textarea>

        <button className="btn send" type="submit">
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
