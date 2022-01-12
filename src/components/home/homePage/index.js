import React from "react";

import Cta from "./cta/Cta";
import Hero from "./hero/Hero";
import Blog from "./blog/Blog";
import Faqs from "./faqs/Faqs";
import Promo from "./promo/Promo";
import About from "../about/About";
import Pricing from "./pricing/Pricing";
import Classes from "./classes/Classes";
import Clients from "./clients/Clients";
// import Contact from "../contact/Contact";
import Featured from "./featured/Featured";
import Trainers from "./trainers/Trainers";
import DownloadApp from "./app/DownloadApp";
import Testimonial from "./testimonial/Testimonial";
import HomepageLayout from "../layouts/homepage.layout";
import '../assets/css/style.scoped.css';
const HomePage = () => {
  return (
    <HomepageLayout>
      <Hero />
      <Promo />
      <About />
      <Cta />
      <Pricing />
      <Featured />
      <Trainers />
      <Classes />
      <Testimonial />
      <Blog />
      <Clients />
      <DownloadApp />
      <Faqs />
      {/* <Contact /> */}
      <a href="#" className="back-to-top bounce">
        <i className="las la-arrow-up"></i>
      </a>
    </HomepageLayout>
  );
};

export default HomePage;
