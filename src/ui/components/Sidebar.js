import React from "react";
import "../../styles/Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = ({ setClick, click }) => {
  return (
    <section className="section-sidebar">
      <aside className="aside">
        <Link to="/policy" className="link link-sidebar">
          Privary Policy
        </Link>
      </aside>
      <div
        className={`${click && "overlay-sidebar"}`}
        onClick={() => setClick(false)}
      ></div>
    </section>
  );
};

export default Sidebar;
