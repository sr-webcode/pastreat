import React, { Component } from 'react'
import ProductBox from '../presentation/layout/productBox';
import actions from '../../redux-layer/actions/index'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'


class RecentProducts extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <section className="recent-products">
        <div className="container">
          <h2>Recent Products</h2>
          <ProductBox />
        </div>
      </section>
    )
  }
}

const mapStateProps = (state) => {
  return {
    recentProducts: state.recentProducts
  }
}

const mapDispatchProps = (dispatch) => bindActionCreators({
  setProducts: actions.setRecentProducts
}, dispatch)




export default connect(mapStateProps, mapDispatchProps)(RecentProducts)
