import React, { Component } from "react";
import actions from "../../redux-layer/actions/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SlideShow from "../presentation/layout/slide";
import SlideShowBullets from "../presentation/layout/slideBullets";
import { clearInterval, clearImmediate } from "timers";

class DesktopSlider extends Component {
  constructor(props) {
    super(props);
    this.currentTime = null;
  }
  componentDidMount() {
    this.currentTime = setInterval(() => {
      this.props.initSlide();
    }, 2500);
  }

  componentWillUnmount() {
    window.clearInterval(this.currentTime);
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
