import React from "react";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-img">
          <span className="image-holder" />
        </div>

        <div className="about-caption">
          <h2>What we offer</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa illo
            aliquid ratione animi dolorem quos cum recusandae doloremque nobis
            ex!
          </p>
          <a href="#" className="cta-hero">
            view our services
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
