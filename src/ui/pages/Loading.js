import React from "react";
import site from "../../assets/site.gif";

export const Loading = () => {
  return (
    <>
      <img src={site} className="loading" />
      <div className="overlay hidden"></div>
    </>
  );
};
