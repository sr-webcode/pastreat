import React from 'react'


const heroSection = () => {
  return (<section className="hero-section">
    <div className="container">

      <div className="hero-child">
        <div className="hero-child-caption">
          <h1>Welcome To Pastreats</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, quas!</p>
          <a href="#" className="cta-hero">View Pastries</a>
        </div>
      </div>

      <div className="hero-child">
        <div className="hero-child-slider">
          <p>tiny slider</p>
        </div>
      </div>

    </div>
  </section>)
}

export default heroSection;