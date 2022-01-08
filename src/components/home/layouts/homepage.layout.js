import React, { useEffect } from "react";
import { Footer, Header } from "./index";


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
