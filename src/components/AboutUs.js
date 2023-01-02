import React from "react";
import "./aboutUs.css";
import memberPic from "../assets/teamember.jpg";
import linkedIn from "../assets/linkedinLogo.png";
import instagram from "../assets/igLogo.png";
import twitter from "../assets/twtLogo.png";
import GradientAbout from "./GradientAbout";
function AboutUs() {
  return (
    <div className="aboutuscomponents">
      <GradientAbout />
      <div className="wrap">
        <div className="contentCom">
          {Teams.map((Team, i) => (
            <div className="teamContainer">
              <h2>{Team.Name}</h2>
              <div className="members">
                {Team.Members.map((member, i) => {
                  return (
                    <div className="memberContainer">
                      <div className="shadow-container">
                        <div className="ImageContainer">
                          <img
                            src={memberPic}
                            className="memberPicture cover"
                          ></img>
                        </div>
                        <div className="memberName">
                          <div>{member.name}</div>
                          <div>
                            <img src={linkedIn} alt="" className="pLogo" />
                          </div>
                          <div>
                            <img src={twitter} alt="" className="pLogo" />
                          </div>
                          <div>
                            <img src={instagram} alt="" className="pLogo" />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const Teams = [
  {
    Name: "Development Team",
    Members: [
      { name: "shreyash Nalawade", link: "links go here" },
      { name: "shreyash Nalawade", link: "links go here" },
      { name: "shreyash Nalawade", link: "links go here" },
      { name: "shreyash Nalawade", link: "links go here" },
      { name: "shreyash Nalawade", link: "links go here" },
      { name: "shreyash Nalawade", link: "links go here" },
    ],
  },
  {
    Name: "Finance Members Members",
    Members: [
      { name: "shreyash Nalawade", link: "links go here" },
      { name: "shreyash Nalawade", link: "links go here" },
      { name: "shreyash Nalawade", link: "links go here" },
    ],
  },
  {
    Name: "Lorem Members",
    Members: [
      { name: "shreyash Nalawade", link: "links go here" },
      { name: "shreyash Nalawade", link: "links go here" },
      { name: "shreyash Nalawade", link: "links go here" },
    ],
  },
];

export default AboutUs;
