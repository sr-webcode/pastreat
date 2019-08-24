import React, { Component } from "react";
import { connect } from 'react-redux'
import actions from '../../../redux-layer/actions/index';


class Burger extends Component {
  render() {
    return (
      <span className="nav-burger" onClick={this.props.burgerToggle}>
        <div />
        <div />
        <div />
      </span>
    );
  }
}

const mapStateProps = (state) => {
  return {
    widgets: state.widgets
  }
}


const mapDispatchProps = (dispatch) => {
  return {
    burgerToggle: () => dispatch(actions.burgerToggle())
  }
}



export default connect(mapStateProps, mapDispatchProps)(Burger);
