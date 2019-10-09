import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Categories() {
  return (
    <Fragment>
      <h3>Categories</h3>
      <ul className="pastry-categories">
        <li>
          <FontAwesomeIcon icon={"birthday-cake"} />
          Cakes
        </li>
        <li>
          <FontAwesomeIcon icon={"chart-pie"} />
          Cupcakes
        </li>
        <li>
          <FontAwesomeIcon icon={"cookie-bite"} />
          Cookies
        </li>
        <li>
          <FontAwesomeIcon icon={"bread-slice"} />
          Bread
        </li>
        <li>
          <FontAwesomeIcon icon={"candy-cane"} />
          Others
        </li>
      </ul>
    </Fragment>
  );
}
