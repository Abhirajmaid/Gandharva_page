import React from "react";
import "./navBar.css";

function Navbar(prop) {
  const style = {
    backgroundColor: prop.blockColor,
  };
  return (
    <div>
      <div className="navgation" style={style}>
        <div className="left">LOGO</div>

        <div className="center">
          <ul>
            <li>Home</li>
            <li>Events</li>
            <li
              onClick={() => {
                {
                  window.location.href = "/aboutus";
                }
              }}
            >
              About Us
            </li>
            <li
              onClick={() => {
                {
                  window.location.href = "/faqpage";
                }
              }}
            >
              {" "}
              FAQs
            </li>
          </ul>
        </div>
        <div className="right">
          <button className="ContactBtn">Contact Us</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
