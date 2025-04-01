import React, { useState } from "react";
import { useSwipeable } from "react-swipeable"; // Import swipe hook
import "./Projects.css";
import Project1 from "../../assets/project1 (1).png";
import Project2 from "../../assets/project1 (2).png";
import Project3 from "../../assets/project1 (3).png";
import Project4 from "../../assets/project1 (4).png";

const projectsDone = [
  {
    image: Project1,
    title: "Phone Web-App",
    techStack: "Nodejs, Expressjs, MongoDB, Ejs, RestApi",
    link: "https://phone-web-app-production.up.railway.app/"
  },
  {
    image: Project2,
    title: "Theme Web-App",
    techStack: "Nodejs, Expressjs, MongoDB, ReactJs, RestApi",
    link: "https://theme-portfolio.vercel.app/"
  },
  {
    image: Project3,
    title: "Portfolio Web-App",
    techStack: "Html, Css, JavaScript",
    link: "https://alok007kr.github.io/PortfolioWebsite/"
  },
  {
    image: Project4,
    title: "Coffee Web-App",
    techStack: "Html, Css, JavaScript",
    link: "https://alok007kr.github.io/CoffeWebsite/"
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsDone.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projectsDone.length) % projectsDone.length
    );
  };

  // Swipe handling
  const handlers = useSwipeable({
    onSwipedLeft: nextSlide, // Swipe left to move forward
    onSwipedRight: prevSlide, // Swipe right to move backward
    preventDefaultTouchmoveEvent: true,
    trackMouse: true, // Enables mouse dragging as well
  });

  return (
    <>
      <div className="skillp-section">
        <div className="skills-tag">
          <h2 className="text-2xl font-bold">
            My <span>Projects</span>
          </h2>
        </div>
        <div>
          <p className="skills-details text-lg">
            Below are the projects I have completed and am currently working on.
          </p>
        </div>

        <div className="project-container" {...handlers}>
          <div className="slider-container-p">
            <button className="nav-btn nav-button left" onClick={prevSlide}>
              ‹
            </button>
            <div className="sliderp">
              <div
                className="slide-track-p"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {projectsDone.map((project, index) => (
                  <div className="project-box" key={index}>
                    <div>
                      <img
                        src={project.image}
                        alt="project"
                        height="500px"
                        width="500px"
                      />
                    </div>
                    <div>
                      <h2 className="font-2xl font-extrabold mt-3 ml-3">
                        {project.title}
                      </h2>
                      <p className="font-xl font-semibold mt-2 ml-3">
                        TechStack used:{" "}
                        <span className="color-change">{project.techStack}</span>
                      </p>
                    </div>
                    <div className="btn-center p-btn">
                      <button className="button-24 m-5">
                        <a href={project.link}>Visit the site</a>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button className="nav-button right" onClick={nextSlide}>
              ›
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
