import React from "react";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import "../../styles/Home.css";
import { Loading } from "./Loading";
import incretech from "../../assets/incretech.pdf";

const Home = ({ loading, setLocation }) => {
  return (
    <section className="section-container ">
      <div className="container">
        <div className="content-info">
          <p className="sub-heading">Welcome to</p>
          <h1 className="primary-heading">iNCRETECH</h1>
          <div className="line"></div>
          <p className="text">
            We are a company that will help every business industry in a small
            scale industry or large scale industry in terms of Social Media
            Marketing SEO. Email Marketing. Website development, Application
            development, CCTV, Centralized Wifi, Biometric machine, Electric
            work, Mobile Signal Booster, EPBX & Intercom. We focus on providing
            services which will not only help you in the long run but will make
            us believe in the quality which will make you come to us again.
          </p>

          <a href={incretech} target="_blank" rel="noreferrer" className="btn">
            <span>Know more</span>
          </a>
        </div>

        <div className="grid-container  ">
          <Services
            technology="/technology"
            id={1}
            name="Youth engineer"
            t1=" CCTV  "
            t2="Centralized Wifi"
            t3=" Biometric Machine"
            t4=" Electric Work"
            t5=" Mobile
            Signal Booster"
            t6="EPBX & Intercom"
          />
          <Services
            technology="/"
            id={2}
            name="Youth technology"
            t1=" Mobile App Design "
            t2="Web Development"
            t3=" Digital Marketing"
            t4=" Graphics
          Designing"
          />
          <Services
            technology="/"
            id={3}
            name="Youth smart"
            t1="coming soon..."
          />
          <Services
            technology="/"
            id={4}
            name="franchising"
            t1="coming soon..."
            last="last"
          />
        </div>
      </div>

      {loading && <Loading />}
    </section>
  );
};

export default Home;
