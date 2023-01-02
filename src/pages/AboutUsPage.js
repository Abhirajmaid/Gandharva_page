import React from "react";
import AboutUs from "../components/AboutUs";
// import AboutUs from "./components/AboutUs";
import "./aboutUsPage.css";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import SegmentLine from "../components/SegmentLine";
function About() {
  return (
    <div className="pageBodya">
      <Navbar blockColor="rgb(277, 0, 164)"></Navbar>
      <AboutUs />
      <SegmentLine />
      <Footer />
    </div>
  );
}

export default About;
