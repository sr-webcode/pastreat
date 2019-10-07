import React from "react";
import HeroSection from "./heroSection";
import ProductsIntro from "./productsIntro";
import RecentProducts from "../../containers/recentProducts";
import AboutSection from "./aboutSection";

//make a separate content for the home , gallery  other sections!

const Content = () => {
  return (
    <main>
      <HeroSection />
      <ProductsIntro />
      <RecentProducts />
      <AboutSection />
    </main>
  );
};

export default Content;
