import React, { Component } from 'react'
import { connect } from 'react-redux'
class Cart extends Component {
  render() {
    const showCart = this.props.menuStatus.cartMenu;
    return (
      <div className={showCart ? "site-cart show" : "site-cart"}>
        <span className="cart-close-btn"></span>
        <h1>Your Cart</h1>
        <ul className="dummy-items">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
        </ul>
        <table className="site-table">
          <tbody>
            <tr>
              <td>Subtotal</td>
              <td>$100.0</td>
            </tr>
            <tr>
              <td>Shipping</td>
              <td>$20.00</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>$120.00</td>
            </tr>
          </tbody>
        </table>
        <a href="#" className="site-checkout-btn">
          Checkout
          </a>
      </div>
    )
  }
}



////will resume tomorrow.. due to electric interferencessss

export default connect(mapStateProps)(Cart)
