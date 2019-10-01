import React from "react";

const ProductsIntro = () => {
  return (
    <section className="products-intro">
      <h2>Product Categories</h2>
      <div className="container">
        <div className="product-box">
          <div className="product-box-img">
            <img src="./images/assets/treat1.png" alt="" />
          </div>
          <div className="product-box-desc">
            <h3>Cakes</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="product-box">
          <div className="product-box-img">
            <img src="./images/assets/treat1.png" alt="" />
          </div>

          <div className="product-box-desc">
            <h3>Cupcakes</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="product-box">
          <div className="product-box-img">
            <img src="./images/assets/treat1.png" alt="" />
          </div>

          <div className="product-box-desc">
            <h3>Others</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsIntro;
