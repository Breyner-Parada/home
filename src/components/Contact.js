import React from "react";
import "../styles/Contact.css";

export const Contact = () => {
  return (
    <section className="Section-contact" id={4}>
      <p>CONTACT</p>
      <div className="Form-container">
        <form action="https://damp-savannah-29967.herokuapp.com/contact" method="POST">
          <div className="Full-name">
            <div className="First-name">
              <label for="fname">First Name</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
              />
            </div>

            <div className="Last-name">
              <label for="lname">Last Name</label>
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Your last name.."
              />
            </div>
          </div>

          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email.."
          ></input>

          <label for="subject">Subject</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
            style={{ height: "200px" }}
          ></textarea>

          <input type="submit" value="Submit" />
        </form>
      </div>
      <div style={{ height: "150px", overflow: "hidden" }}>
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: "100%", width: "100%" }}
        >
          <path
            d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            style={{ stroke: "none", fill: "#6b7070" }}
          ></path>
        </svg>
      </div>
    </section>
  );
};
