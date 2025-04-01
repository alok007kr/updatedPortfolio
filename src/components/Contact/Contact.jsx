import React, { useState } from "react";
import "./Contact.css"; // Import the CSS file

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <div className="contact-container">
      <div className="skills-tag">
          <h2 className="text-2xl font-bold">
            Contact<span> Me</span>
          </h2>
        </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button className="button-24" type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
