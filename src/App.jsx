import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const ScrollToSection = () => {
  const location = useLocation();

  React.useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToSection /> {/* This ensures smooth scrolling */}
      <Header />
      <div id="about"><About /></div>
      <div id="skills"><Skills /></div>
      <div id="experience"><Experience /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>
      <Footer />
      <Routes>
        <Route path="/:section" element={null} />
      </Routes>
    </Router>
  );
};

export default App;
