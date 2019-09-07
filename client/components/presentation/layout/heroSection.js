import React from 'react'
import DesktopSlider from '../../containers/desktopSlider'

const heroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">

        <div className="hero-child">
          <div className="hero-child-caption">
            <h1>Welcome To Pastreats</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, quas!</p>
            <a href="#" className="cta-hero">View Pastries</a>
          </div>
        </div>

        <div className="hero-child">
          <DesktopSlider />
        </div>

      </div>
    </section>)
}

export default heroSection;