import React from 'react'

const SlideBullets = (props) => {

  const checkSlideRef = (e) => {
    const slideRef = e.target.getAttribute('data-slide-ref');
    props.changeSlide(slideRef);
  }

  return (<div className="slide-bullets">
    {props.sliders.map((each, index) => {
      return <span className={each.enabled ? "bullet active" : "bullet"}
        key={index}
        data-slide-ref={each.slide}
        onClick={checkSlideRef} />
    })}
  </div>)
}

export default SlideBullets;

