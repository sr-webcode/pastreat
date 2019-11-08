import React, { Fragment } from "react";

//temporary items
const products = [
  {
    productName: "Velvet Cake",
    price: 12,
    category: "Cake",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, id`,
    image: "/images/assets/redcake1.png"
  }
];

const simulateRequest = items => {
  //multiply and loop items to populate list!

  for (let x = 0; x < 5; x++) {
    items = items.concat(items[0]);
  }

  return items.map((data, index) => {
    return (
      <div key={index} className="pastry-product-box">
        <div className="pastry-product-wrapper">
          {" "}
          {/* just a wrapper for the animation*/}
          <img src={data.image} alt="cake" />
          <div className="pastry-product-hidden-caption">
            <h5>{data.productName}</h5>
            <p>{data.description}</p>
            <button className="cta-defaults">view item</button>
          </div>
        </div>
      </div>
    );
  });
};

export default function ProductList() {
  return (
    <Fragment>
      <h3>Product Placeholder</h3>
      <div className="pastry-content-products">
        {/* in real life this will be a fetch from your database!*/}
        {simulateRequest(products)}
      </div>
    </Fragment>
  );
}
