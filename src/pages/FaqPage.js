import React, { useState, useEffect } from "react";
import FaqComponent from "../components/FaqComponent";
import Footer from "../components/Footer";
// import Gradient from "./components/Greadient";
import Navbar from "../components/NavBar";
import SegmentLine from "../components/SegmentLine";
import "./faqPage.css";
function Fyqpage() {
  return (
    <div className="pageBody">
      <Navbar blockColor="#00C714"></Navbar>
      <FaqComponent />
      <SegmentLine />
      <Footer />
    </div>
  );
}

export default Fyqpage;
