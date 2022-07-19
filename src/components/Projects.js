import React from "react";
import "../styles/Projects.css";
import Aos from "aos";
import "aos/dist/aos.css";

export const Projects = () => {
  Aos.init();
  return (
    <section className="Section-projects" id={3}>
      <div style={{height: "150px", overflow: "hidden"}}>
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{height: "100%", width: "100%"}}
        >
          <path
            d="M-0.27,70.56 C262.69,-13.30 259.31,204.78 500.27,55.77 L500.00,0.00 L0.00,0.00 Z"
            style={{stroke: "none", fill: "#ffff"}}
          ></path>
        </svg>
      </div>
      <p className="Title-project">PROJECTS</p>
      <div className="Projects-container">
        <div class="card">
          <img src="https://i.imgur.com/cWgD5Tr.png" alt="TODO" />
          <div class="info">
            <h1>TODO's</h1>
            <p>
              Make your tasks easier, add tasks, check them and when the tasks
              are done if you want, just delete them and make more.
            </p>
            <a href="https://breyner-parada.github.io/reactjs">
              <button>Site</button>
            </a>
            <a href="https://github.com/Breyner-Parada/reactjs">
              <button>Code</button>
            </a>
          </div>
        </div>

        <div class="card">
          <img src="https://i.imgur.com/eHb2zib.png" alt="MOVIE" />
          <div class="info">
            <h1>MOVIEAPP</h1>
            <p>
              Find information of your favorite movies, see and search what
              movies are trending daily, make with The MovieDB API.
            </p>
            <a href="https://breyner-parada.github.io/movieapp">
              <button>Site</button>
            </a>
            <a href="https://github.com/Breyner-Parada/movieapp">
              <button>Code</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
