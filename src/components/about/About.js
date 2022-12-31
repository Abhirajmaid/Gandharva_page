import React from "react";
import "./About.css";
import aboutImg from "../../images/about.png";

function About() {
  return (
    <div className="about">
      <div className="leftAbout">
        <img className='aboutImg' src={aboutImg} alt="" />
      </div>

      <div className="rightAbout">
        <div className="aboutTitle">About Us</div>

        <div className="aboutContent">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae
          sint quaerat, dolores cumque reprehenderit optio ex voluptatem at
          magnam consequatur labore consequuntur similique facilis explicabo
          perferendis eveniet, saepe aliquam inventore iusto molestias quod sed.
          Inventore totam ipsum est dolores illum deserunt, facilis laudantium
          magni maxime? Debitis quasi dolor quibusdam non.
        </div>
        <button className="aboutReadMore">Read More</button>
      </div>
    </div>
  );
}

export default About;
