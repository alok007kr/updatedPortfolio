import React from "react";
import "./Skills.css";
import Html from "../../assets/html5-brands.svg";
import Css from "../../assets/css3-alt-brands.svg";
import Javascript from "../../assets/js-brands.svg";
import ReactJs from "../../assets/react-brands.svg";
import Angular from "../../assets/angular-brands.svg";
import VueJs from "../../assets/vuejs-brands.svg";
import Nodejs from "../../assets/node-js-brands.svg";
import Express from "../../assets/icons8-express-js.svg";
import MongoDB from "../../assets/icons8-mongodb-48.png";
import Springboot from "../../assets/icons8-spring-boot.svg";
import JavaScript from "../../assets/icons8-javascript.svg";
import Cpp from "../../assets/cpp.png";
import Java from "../../assets/icons8-java.svg";
import DataStructure from "../../assets/icons8-data-structure-64.png";
const Skills = () => {
  return (
    <>
      <div className="skills-section">
        <div className="skills-tag">
          <h2 className="text-2xl font-bold">
            My<span> Skills</span>
          </h2>
        </div>
        <div>
          <p className="skills-details text-lg">
            Below are the skills I have acquired, applied to projects I have
            completed, and am currently honing through ongoing work.
          </p>
        </div>

        <div className="skills-divider">
          <div className="skills-container">
            <div className="skills-box">
              <div className="box-header font-medium">
                <h2>FrontEnd</h2>
              </div>

              <div className="phone-grid grid grid-cols-3">
                <div className="skills-imgText">
                  <img src={Html} alt="icons" height="34px" width="32px" />
                  <p className="ml-2 text-base font-medium">HTML</p>
                </div>
                <div className="skills-imgText">
                  <img src={Css} alt="icons" height="34px" width="32px" />
                  <p className="ml-2 text-base font-medium">CSS</p>
                </div>
                <div className="skills-imgText">
                  <img
                    src={Javascript}
                    alt="icons"
                    height="34px"
                    width="32px"
                  />
                  <p className="ml-2 text-base font-medium">JAVASCRIPT</p>
                </div>
                <div className="skills-imgText">
                  <img src={ReactJs} alt="icons" height="34px" width="32px" />
                  <p className="ml-2 text-base font-medium">REACTJS</p>
                </div>
                <div className="skills-imgText">
                  <img src={Angular} alt="icons" height="34px" width="32px" />
                  <p className="ml-2 text-base font-medium">Angular</p>
                </div>
                <div className="skills-imgText">
                  <img src={VueJs} alt="icons" height="34px" width="32px" />
                  <p className="ml-2 text-base font-medium">VUEjs</p>
                </div>
              </div>
            </div>
          </div>

          <div className="skills-container">
            <div className="skills-box">
              <div className="box-header font-medium">
                <h2>BackEnd</h2>
              </div>

              <div className="grid grid-cols-2">
              <div className="skills-imgText">
                <img src={Nodejs} alt="icons" height="34px" width="34px" />
                <p className="ml-2 text-base font-medium">NodeJs</p>
              </div>
              <div className="skills-imgText">
                <img src={Express} alt="icons" height="34px" width="34px" />
                <p className="ml-2 text-base font-medium">ExpressJs</p>
              </div>
              <div className="skills-imgText">
                <img src={MongoDB} alt="icons" height="34px" width="34px" />
                <p className="ml-2 text-base font-medium">MongoDB</p>
              </div>
              <div className="skills-imgText">
                <img src={Springboot} alt="icons" height="34px" width="34px" />
                <p className="ml-2 text-base font-medium">SpringBoot</p>
              </div>
              </div>
            </div>
          </div>

          <div className="skills-container">
          <div className="skills-box">
              <div className="box-header font-medium">
                <h2>Language</h2>
              </div>

              <div className="grid grid-cols-2">
              <div className="skills-imgText">
                <img src={JavaScript} alt="icons" height="34px" width="34px" />
                <p className="ml-2 text-base font-medium">JavaScript</p>
              </div>
              <div className="skills-imgText">
                <img src={Cpp} alt="icons" height="34px" width="34px" />
                <p className="ml-2 text-base font-medium">C++</p>
              </div>
              <div className="skills-imgText">
                <img src={Java} alt="icons" height="34px" width="34px" />
                <p className="ml-2 text-base font-medium">Java</p>
              </div>
              <div className="skills-imgText">
                <img src={DataStructure} alt="icons" height="34px" width="34px" />
                <p className="ml-2 text-base font-medium">Data Structure</p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
