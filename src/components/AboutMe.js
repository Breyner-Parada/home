import React from "react";
import "../styles/AboutMe.css";
import Aos from "aos";
import "aos/dist/aos.css";

export const AboutMe = () => {
  Aos.init();
  return (
    <section className="Section-about" id={1}>
      
      <div className="About-component">
        <div
          className="Hello-title"
          data-aos="fade-down-right"
          data-aos-duration="1500"
        >
          HELLO WORLD!!!
        </div>
        <div className="About-container">
          <div
            className="About-info"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <p>
              My name is Breyner, I am a self-taught Junior Web Developer, with knowledge on
              different programming languages and frameworks. Passionate about new challenges, build products and services to improve people's lives. I
              consider myself a person who wants to learn every day at least a
              thing.
            </p>
          </div>
          <div className="About-images">
            <img
              data-aos="fade-right"
              data-aos-duration="1500"
              className="Image Image-1"
              src="https://i.imgur.com/ZabrpSY.jpg"
              alt="AboutMe"
            />
            <img
              data-aos="fade-up-right"
              data-aos-duration="1500"
              className="Image Image-2"
              src="https://i.imgur.com/cP1V1wM.jpg"
              alt="AboutMe"
            />
            <img
              data-aos="fade-down-left"
              data-aos-duration="1500"
              className="Image Image-3"
              src="https://i.imgur.com/PlbQkjN.jpg"
              alt="AboutMe"
            />
          </div>
        </div>
      </div>
      <div style={{ height: "150px", overflow: "hidden"}}>
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{height: "100%", width: "100%"}}
        >
          <path
            d="M-5.36,41.95 C229.97,-30.08 234.47,191.95 502.54,43.92 L500.00,150.00 L0.00,150.00 Z"
            style={{stroke: "none", fill: "#fff"}}
          ></path>
        </svg>
      </div>
    </section>
  );
};
