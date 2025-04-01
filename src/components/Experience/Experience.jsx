import React, { useState } from "react";
import { useSwipeable } from "react-swipeable"; // Import swipe hook
import "./Experience.css";

const experiences = [
  {
    company: "TCS",
    role: "System Engineer",
    responsibilities: [
      "Built two Angular UIs and integrated MSAL for authentication.",
      "Handled API responses and displayed data seamlessly in the UI.",
      "Wrote unit test cases using Karma and Jasmine for functionality testing.",
    ],
  },
  {
    company: "Epatrakkar",
    role: "BackEnd Developer Intern",
    responsibilities: [
      "Develop and maintain scalable backend applications using Node.js and frameworks like Express.js",
      "Design and implement RESTful APIs to handle client-server communication efficiently.",
      "Integrate databases (SQL/NoSQL), authentication, and third-party services for robust backend functionality.",
    ],
  },
  {
    company: "NGO",
    role: "FrontEnd Developer Intern",
    responsibilities: [
      "Develop dynamic and responsive user interfaces using React, HTML, CSS, and Tailwind CSS.",
      "Optimize UI performance and ensure cross-browser compatibility for a seamless user experience.",
      "Implement reusable components and manage state efficiently using hooks, context API, or state management libraries.",
    ],
  },
];

const Experience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % experiences.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? experiences.length - 1 : prevIndex - 1
    );
  };

  // Swipe handling
  const handlers = useSwipeable({
    onSwipedLeft: nextSlide, // Swipe left to go to next slide
    onSwipedRight: prevSlide, // Swipe right to go to previous slide
    preventDefaultTouchmoveEvent: true,
    trackMouse: true, // Enables swipe on both touch & mouse drag
  });

  return (
    <div className="skillr-section">
      <div className="skills-tag">
        <h2 className="text-2xl font-bold">
          My <span>Experiences</span>
        </h2>
      </div>
      <div>
        <p className="skills-details text-lg">
          Below are the skills I have acquired, applied to projects I have
          completed, and am currently honing through ongoing work.
        </p>
      </div>

      <div className="slider-container" {...handlers}>
        <button className="nav-button left" onClick={prevSlide}>
          ‹
        </button>
        <div className="slider">
          <div
            className="slide-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {experiences.map((exp, index) => (
              <div className="experience-box" key={index}>
                <div className="m-3">
                  <h2 className="text-xl font-bold">{exp.company}</h2>
                  <h4 className="text-lg font-medium">{exp.role}</h4>
                  <hr className="line mr-4"></hr>
                </div>
                <div className="m-4">
                  <h2 className="text-lg mt-2 ml-1 mb-2">Responsibilities:-</h2>
                  <ul className="list-disc pl-5">
                    {exp.responsibilities.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="exp-btn mt-8">
                  <button className="button-24">
                    <a href="https://www.linkedin.com/in/alok-kumar0/">Connect with me</a>
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
  );
};

export default Experience;
