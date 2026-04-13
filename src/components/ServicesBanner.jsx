import React from "react";
import "../styles/ServicesBanner.css";
import card1 from "../assets/card1.jpg";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";

const services = [
   {
    title: "Automotive Connectivity & Infotainment",
    description:
      "Seamless in-car connectivity and infotainment solutions.",
    image: card1,
  },
  {
    title: "Automotive EMC & Antenna Testing",
    description:
      "Ensure EMC compliance and antenna performance.",
    image: card2,
  },
  {
    title: "Advanced Automotive Radar Solutions",
    description:
      "Advanced radar testing for autonomous driving safety.",
    image: card3,
  },

];

const ServicesSection = () => {
  return (
    <section className="services">
      <h2 className="services-title">OUR SERVICES</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.image} alt={service.title} className="service-img" />
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className="learn-more">Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
