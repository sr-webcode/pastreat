import React, { Component } from 'react'
import ProductBoxes from '../presentation/layout/productBoxes';
import actions from '../../redux-layer/actions/index'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'


class RecentProducts extends Component {

  componentDidMount() {
    //temp items to fetch products, will set to fetch endpoint at a later time
    const tempItems = [
      {
        itemName: "Moon Cake",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        itemName: "Cinamon Roll",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        itemName: "Trese Martes Cake",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        itemName: "DougNut Roll",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ]


    setTimeout(() => {
      this.props.setProducts(tempItems)
    }, 500);


  }

  render() {
    const products = this.props.recentProducts.items;
    return (
      <section className="recent-products">
        <h2>Recent Products</h2>
        <div className="container">
          {products.length > 0 ? <ProductBoxes items={products} /> : <span className="general-loader" />}
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
