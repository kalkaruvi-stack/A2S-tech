import React from "react";
import "../styles/About.css"; // Make sure the path matches your project
import embeddedImg from "../assets/about.jpg";


const AboutUs = () => {
  return (
    <section className="aboutus-section">
      <div className="aboutus-container">
        {/* Left Image */}
        <div className="aboutus-image">
         <img src={embeddedImg} alt="Embedded Systems" />

        </div>

        {/* Right Content */}
        <div className="aboutus-content">
          <h2>About A2S Technologies</h2>
          <p>
            A2S Technologies specializes in <strong>Embedded Testing</strong> training, staffing, and consulting. 
            With over <strong>25 years of experience</strong>, we've honed our expertise in testing technologies across the 
            <strong> Automotive, Medical,</strong> and <strong>Aerospace</strong> industries.
          </p>
          <p>
            Our mission is to deliver high-quality testing solutions, empower professionals with cutting-edge training, 
            and provide staffing services that help businesses succeed in a rapidly evolving technological landscape.
          </p>
          <button className="aboutus-btn">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
