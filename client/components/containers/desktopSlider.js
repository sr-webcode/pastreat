import React, { Component } from 'react'
import actions from '../../redux-layer/actions/index'
import { connect } from 'react-redux'
class DesktopSlider extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="hero-child-slider">
      </div>
    )
  }
}

const mapStateProps = (state) => {
  return {
    slideState: state.slider
  }
}



export default connect(mapStateProps)(DesktopSlider)
