import React, { Component } from 'react';
import { connect } from 'react-redux'
import actions from '../../redux-layer/actions/index';


class Overlay extends Component {

  render() {
    const showOverlay = this.props.menuStatus.overlay;

    return (
      <div
        className={showOverlay ? "site-overlay show" : "site-overlay"}
        onClick={this.props.overlayClick}
      />
    )
  }
}


const mapStateProps = (state) => {
  return {
    menuStatus: state.widgets
  }
}


const mapDispatchProps = (dispatch) => {
  return {
    overlayClick: () => dispatch(actions.overlayClick())
  }
}




export default connect(mapStateProps, mapDispatchProps)(Overlay)

