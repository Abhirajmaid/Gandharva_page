import React from "react";
import "./footer.css";

import linkedIn from "../assets/linkedinLogo.png";
import youtube from "../assets/ytLogo.png";
import instagram from "../assets/igLogo.png";
import twitter from "../assets/twtLogo.png";

function Footer() {
  return (
    <div className="footer">
      <div className="logo">LOGO</div>
      <div className="slogan">Here Goes the Slogan!</div>
      <ul>
        <li>Home</li>
        <li>Events</li>
        <li>About Us</li>
        <li>FAQs</li>
        <li>Sponsor Us</li>
      </ul>

      <div className="socials">
        <img src={linkedIn} alt="" className="sLogo" />
        <img src={youtube} alt="" className="sLogo" />
        <img src={instagram} alt="" className="sLogo" />
        <img src={twitter} alt="" className="sLogo" />
      </div>

      <div className="copyright">
        Copyright ©️2022. Gandharva. All Rights Reserved.
      </div>
      <div className="madewith">Made with ❤️</div>
    </div>
  );
}

export default Footer;
