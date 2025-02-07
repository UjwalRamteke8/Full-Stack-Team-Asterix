import React from "react";
import clubLogo from "../images/Dark version.png";

const Preloader = () => {
  return (
    <div
      id="preloader"
      className="fixed top-0 left-0 w-full h-full bg-white flex justify-center items-center z-50"
    >
      <img
        src={clubLogo}
        alt="Club Logo"
        className="w-36 h-auto animate-spin"
      />
    </div>
  );
};

export default Preloader;
