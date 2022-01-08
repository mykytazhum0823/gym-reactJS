import React, { useEffect } from "react";
import { Footer, Header } from "./index";
import '../assets/css/style.css';
import '../assets/css/swiper-min.css';
import '../assets/css/mmenu.css';
import '../assets/css/line-awesome.min.css';
import '../assets/css/flaticon.css';
import '../assets/css/animate.min.css';
import '../assets/css/owl.carousel.css';
import '../assets/css/magnific-popup.css';
import '../assets/css/nice-select.css';

const HomepageLayout = ({ children }) => {

  useEffect(()=>{
    var script;
    script= document.createElement("script");
		script.src = "../assets/js/owl.carousel.js";
		script.async = true;
		document.body.appendChild(script);

    script= document.createElement("script");
		script.src = "../assets/js/main.js";
		script.async = true;
		document.body.appendChild(script);

    script = document.createElement("script");
		script.src = "../assets/js/comparison-slider.js";
		script.async = true;
		document.body.appendChild(script);
    
  }, []);

  return (
    <div className="homepage-wrapper">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default HomepageLayout;
