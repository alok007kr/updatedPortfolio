import React from "react";
import "./Footer.css"; // Import CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Alok. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
