import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const Layout = () => (
  <>
    <Header />
    <About />
    <Skills />
    <Experience />
    <Projects />
    <Contact />
    <Footer />
  </>
);

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<About />} /> {/* Default page */}
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
