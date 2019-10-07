import React, { Component } from "react";
import actions from "../../redux-layer/actions/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SlideShow from "../presentation/layout/slide";
import SlideShowBullets from "../presentation/layout/slideBullets";

class DesktopSlider extends Component {
  componentDidMount() {
    setInterval(() => {
      this.props.initSlide();
    }, 2500);
  }

  render() {
    const currentSliders = this.props.slideState.sliders;

    return (
      <div className="hero-child-slider">
        <SlideShow sliders={currentSliders} />
        <SlideShowBullets
          sliders={currentSliders}
          changeSlide={this.props.manualChange}
        />
      </div>
    );
  }
}

const mapStateProps = state => {
  return {
    slideState: state.slider
  };
};

const mapDispatchProps = dispatch =>
  bindActionCreators(
    {
      manualChange: actions.slideChange,
      initSlide: actions.initSlide
    },
    dispatch
  );

export default connect(
  mapStateProps,
  mapDispatchProps
)(DesktopSlider);
