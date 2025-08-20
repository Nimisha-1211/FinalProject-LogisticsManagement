import React from "react";
import "../../styles/Common/SectionOne.css"
import Logisticsvideo from "../../assets/Logisticsvideo.mp4"
const SectionOne = () => {
  return (
    <div className="section-one">
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="background-video">
        <source src={Logisticsvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="overlay">
        <h1>
          PROVIDING DEDICATED <br />
          TRANSPORTATION SERVICES <br />
          ACROSS INDIA
        </h1>
        <button className="contact-btn">CONTACT US</button>
      </div>
    </div>
  );
};

export default SectionOne;