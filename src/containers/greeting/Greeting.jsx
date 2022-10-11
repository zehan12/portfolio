import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/images";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";

import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting({prof}) {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
                {/* <span className="wave-emoji">{emoji("👋")}</span> */}
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                {greeting.resumeLink && (
                  <Button
                    text="See my resume"
                    newTab={true}
                    href={greeting.resumeLink}
                  />
                )}
              </div>
            </div>
          </div>
          {/* <div className="greeting-image-div"> */}
            {/* {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img
                alt="man sitting on table"
                // src={require("../../assets/images/manOnTable.svg")}
                src={require("../../assets/images/anamika.png")}
              ></img>
            )} */}
            {/* <img className={isDark ? "colorChnageDark" : "colorChangeLight"}
                alt="man sitting on table"
                // src={require("../../assets/images/manOnTable.svg")}
                src={require("../../assets/images/anamika.jpg")}
                height = "300" width ="300" style={{borderRadius:"50%",marginLeft:"10%"}}
              ></img> */}
          {/* </div> */}
        </div>
        <div className="greeting-image-div">
             <img
                alt="man sitting on table"
                // src={require("../../assets/images/manOnTable.svg")}
                src={"https://avatars.githubusercontent.com/u/73664886?s=400&u=b2b3a13e16fc7e6af8a5cdcfe2ab86bd9ffd6d56&v=4"}
                height = "300" width ="300" style={{borderRadius:"50%"}}
              ></img>
        </div>
      </div>
    </Fade>
  );
}
