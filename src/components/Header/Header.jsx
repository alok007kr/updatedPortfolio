import React, {useState} from 'react'
import "./Header.css"

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }


  return ( 
    <>
    <div className="head-container">
        {/* For Logo */}
        <div className="logo">
            <h2 className="logo-name ml-10 text-4xl font-bold text-center text-gray-500">Alok</h2>
            <p className="circle"></p>
        </div>
        {/* For Links */}

        

        <div className={`nav-link font-medium  ${isMenuOpen ? "active" : ""}`}>
            <ul>
              <li><a href="/about">About</a></li>
              <li><a href="/skills">Skills</a></li>
              <li><a href="/experience">Experience</a></li>
              <li><a href="projects">Projects</a></li>

              
              <li >
                <a href="https://github.com/alok007kr">Github</a>
              </li>

              
            </ul>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
            {isMenuOpen ? "☰" : "✖"}
        </div>
        


        {/* <div className="theme-btn"> dark button</div> */}

    </div>
    </>
  )
}

export default Header;