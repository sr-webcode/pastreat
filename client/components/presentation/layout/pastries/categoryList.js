import React, { Fragment } from "react";

export default function Categories() {
  return (
    <Fragment>
      <h3>Product Categories</h3>
      <ul className="pastry-categories">
        <li>Cookies</li>
        <li>Cupcakes</li>
        <li>Bread</li>
        <li>Cakes</li>
        <li>Other Treats</li>
      </ul>
    </Fragment>
  );
}
