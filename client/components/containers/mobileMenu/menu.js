import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../../redux-layer/actions/index';
import { bindActionCreators } from 'redux'


class MobileMenu extends Component {
  render() {
    const shouldOpen = this.props.showMenu.mobileMenu;
    return (
      <div className={shouldOpen ? "site-mobile-menu open" : "site-mobile-menu"}>
        <span className="site-close-btn" onClick={this.props.burgerToggle} />
        <ul className="site-mobile-menu-list">
          <li><a href="#">Home</a></li>
          <li><a href="#">Pastries</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#" onClick={this.props.cartToggle}>Cart</a></li>
          <li><a href="#">Search</a></li>
        </ul>
      </div>
    )
  }
}


const mapStateProps = (state) => {
  return {
    showMenu: state.widgets
  }
}


const mapDispatchProps = (dispatch) => bindActionCreators({
  burgerToggle: actions.burgerToggle,
  cartToggle: actions.cartToggle
}, dispatch)


export default connect(mapStateProps, mapDispatchProps)(MobileMenu)
