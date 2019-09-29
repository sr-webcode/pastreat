import React, { Fragment } from 'react'

const ProductBox = (props) => {

  const itemsExtract = (val) => {
    return val.map((each, index) => {
      return <div key={index} className="product-box-recent">
        <div className="product-box-recent-img">
          <img src="./images/assets/treat1.png" alt="cake" />
        </div>
        <div className="product-box-recent-caption">
          <h3>{each.itemName}</h3>
          <p>{each.desc}</p>
        </div>
      </div>
    })
  }

  const { items } = props;
  return (<Fragment>
    {itemsExtract(items)}
    <a href="#" className="cta-hero" >more products</a>
  </Fragment>)
}

export default ProductBox;