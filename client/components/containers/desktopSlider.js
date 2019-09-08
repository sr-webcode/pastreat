import React, { Component } from 'react'
import actions from '../../redux-layer/actions/index'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Slide from '../presentation/layout/slide'



class DesktopSlider extends Component {
  componentDidMount() {
    setInterval(() => {
      this.props.initSlide();
    }, 2000);
  }

  render() {
    const count = this.props.slideState.count;
    // console.log(count);
    const sliders = this.props.slideState.sliders;
    return (<div className="hero-child-slider"  >
      {sliders.map((slide, index) => {
        const shouldShow = slide.enabled;
        return <Slide key={index} slideIndex={index} isEnabled={shouldShow} />
      })}
    </div>)

  }
}

const mapStateProps = (state) => {
  return {
    slideState: state.slider
  }
}

const mapDispatchProps = (dispatch) => bindActionCreators({
  manualChange: actions.slideChange,
  initSlide: actions.initSlide
}, dispatch)


export default connect(mapStateProps, mapDispatchProps)(DesktopSlider)
