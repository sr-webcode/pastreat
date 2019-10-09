import React, { Fragment } from "react";

import HeroSection from "../layout/heroSection";
import ProductsIntro from "../layout/productsIntro";
import RecentProducts from "../../containers/recentProducts";
import AboutSection from "../layout/aboutSection";

export default function HomeRouteContent() {
  return (
    <Fragment>
      <HeroSection />
      <div className="bg-pattern">
        <ProductsIntro />
        <RecentProducts />
      </div>
      <AboutSection />
    </Fragment>
  );
}
