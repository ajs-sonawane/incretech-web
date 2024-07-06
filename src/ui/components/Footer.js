import React from "react";
import "../../styles/Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  console.log(year);
  return (
    <footer>
      <p>© Copyright {year}, INCRETECH Group, All rights reserved. | INDIA</p>
    </footer>
  );
};

export default Footer;
