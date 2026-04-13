import React, { useEffect, useRef } from "react";
import "../styles/Herosection.css";

const stats = [
  { num: "100+", label: "Testing Projects" },
  { num: "500+", label: "Students Trained" },
  { num: "5+", label: "Years Experience" },
];

const Herosection = () => {
  const ref = useRef();

  useEffect(() => {
    const el = ref.current;
    setTimeout(() => {
      el.classList.add("show");
    }, 200);
  }, []);

  return (
    <section className="hero-section">
      {/* Background */}
      {/* <div className="bg-grid"></div>
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div> */}

      <div className="hero-inner" ref={ref}>
        {/* LEFT */}
        <div className="hero-left">
          <h1 className="hero-title">
            <span>Transforming the Future</span>
            <br />
            <strong>Embedded Testing</strong>
          </h1>

          <p className="hero-desc">
            We provide Embedded Testing, HiL validation and IT training 
            solutions to accelerate your business growth.
          </p>

          <div className="hero-btns">
            <button className="btn-main">Explore Services</button>
            <button className="btn-ghost">Get Started</button>
          </div>

          <div className="hero-stats">
            {stats.map((s, i) => (
              <div className="stat" key={i}>
                <h3>{s.num}</h3>
                <p>{s.label}</p>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default Herosection;
