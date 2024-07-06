import React from "react";
import { Link } from "react-router-dom";

const Wifi = () => {
  return (
    <section className="section-items transition-in">
      <Link to="/" className="link">
        Home
      </Link>
      /
      <Link to="/technology" className="link">
        Technology
      </Link>
      <div className="container">
        <div className="content col">
          <h2 className="secondary">Centralised WIFI</h2>
          <p className="info">
            One of the biggest advantages of centralization is the cost
            associated with it. Any centralized network or infrastructure
            requires less support and cost. Here are the key benefits of Managed
            Wi-Fi &gt; 1. Ease of Business 2. Dynamic scalability 3. Highly
            secure 4. Complete visibility 5. Enhanced user experience.
          </p>
        </div>

        <div className="col image-container">
          <img
            src="https://images.unsplash.com/photo-1645725677294-ed0843b97d5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="info-image images"
          />
        </div>
      </div>
    </section>
  );
};

export default Wifi;
