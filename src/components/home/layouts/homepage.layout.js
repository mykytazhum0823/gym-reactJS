import React, { useEffect } from "react";
import { Footer, Header } from "./index";
import useScript from 'usescript-hook';
import '../assets/css/style.scoped.css';
import '../assets/css/swiper-min.css';
import '../assets/css/mmenu.css';
import '../assets/css/line-awesome.min.css';
import '../assets/css/flaticon.css';
import '../assets/css/animate.min.css';
import '../assets/css/owl.carousel.css';
import '../assets/css/magnific-popup.css';
import '../assets/css/nice-select.css';


const HomepageLayout = ({ children }) => {
  useScript("../assets/js/owl.carousel.js");
  useScript("../assets/js/comparison-slider.js");
  useScript("../assets/js/main.js");


  return (
    <div className="homepage-wrapper">
      <Header isHome={true}/>
      {children}
      <Footer />
    </div>
  );
};

export default HomepageLayout;
