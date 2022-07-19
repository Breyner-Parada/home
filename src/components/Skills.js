import React from "react";
import "../styles/Skills.css";
import Aos from "aos";
import "aos/dist/aos.css";

export const Skills = () => {
  Aos.init();
  return (
    <section className="Section-skills" id={2}>
      <p>SKILLS</p>
      <div className="Skills-container">
        <div data-aos="fade-right" data-aos-duration="1500" className="Icon Icon-1">
          <img
            src="https://cdn-icons-png.flaticon.com/128/174/174854.png"
            alt="HTML"
          />
        </div>
        <div data-aos="fade-left" data-aos-duration="1500" className="Icon Icon-2">
          <img
            src="https://cdn-icons-png.flaticon.com/128/732/732190.png"
            alt="CSS"
          />
        </div>
        <div data-aos="fade-right" data-aos-duration="1500" className="Icon Icon-3">
          <img
            src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png"
            alt="JAVASCRIPT"
          />
        </div>
        <div data-aos="fade-left" data-aos-duration="1500" className="Icon Icon-4">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
            alt="REACT"
          />
        </div>
        <div data-aos="fade-right" data-aos-duration="1500" className="Icon Icon-5">
          <img
            src="https://cdn-icons-png.flaticon.com/128/919/919825.png"
            alt="NODE"
          />
        </div>
        <div data-aos="fade-left" data-aos-duration="1500" className="Icon Icon-6">
          <img
            src="https://expressjs.com/images/express-facebook-share.png"
            alt="EXPRESS"
          />
        </div>
        <div data-aos="fade-right" data-aos-duration="1500" className="Icon Icon-7">
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/mongodb-3521676-2945120.png"
            alt="MONGODB"
          />
        </div>
      </div>
    </section>
  );
};
