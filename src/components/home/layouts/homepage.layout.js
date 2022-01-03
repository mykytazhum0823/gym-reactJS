import React from "react";
import { Footer, Header } from "./index";

const HomepageLayout = ({ children }) => {
  return (
    <div className="homepage-wrapper">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default HomepageLayout;
