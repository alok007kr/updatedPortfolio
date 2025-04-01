import React from 'react'
import './About.css'
import myImage from '../../assets/my-image.jpg';

const About = () => {
  return (
   <>
   <div className="hero-section">
   <div className="name-section">
    <h1 className="font-[1000] text-5xl">Hello, I'm</h1>
    <br/>
    <h1 className="font-[1000] text-5xl">Alok Kumar</h1>
   </div>

   <div className="role-animation text-2xl font-medium mt-2">
    <p>I am a <span className="">FullStack Developer</span></p>
   </div>

   <div className="my-details font-normal text-lg">
   <div className="child1">
   <p className="mt-2 mb-10">
    I am a Full-Stack Developer with a B.Tech in Computer Science Engineering and freelance experience. Skilled in both front-end and back-end development, I enjoy building scalable and user-friendly applications. I am seeking opportunities in the IT sector to contribute to impactful software projects and enhance user experiences through innovative solutions.
    </p>
    <button className="button-24"><a href="https://drive.google.com/file/d/1uoCq2TpFGe88_Ky-DE6cxhu3Xlvd0gcl/view?usp=drivesdk ">Download CV</a></button>
   </div>

    <div className="child2 outer-circle">
    <img src={myImage} alt="photo" className="circle-image" />
    </div>
   </div>


   </div>
   </>
  )
}

export default About