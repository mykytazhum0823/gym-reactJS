import React from "react";

import About from "./about/About";
import Cta from "./homePage/cta/Cta";
import Blog from "./homePage/blog/Blog";
import Faqs from "./homePage/faqs/Faqs";
import AppPage from "./homePage/app/DownloadApp";
import Classes from "./homePage/classes/Classes";
import Clients from "./homePage/clients/Clients";
import Featured from "./homePage/featured/Featured";
import HomepageLayout from "./layouts/homepage.layout";

const withLayout = (Component) => {
  const WrappedComponent = (props) => (
    <HomepageLayout>
      <Component {...props} />
    </HomepageLayout>
  );
  return WrappedComponent;
};

/**
 * Remove pages here and in App.js
 * If you don't want them to be accessible
 * on separate pages.
 */
const Page = {
  CTA: withLayout(Cta),
  FAQ: withLayout(Faqs),
  Blog: withLayout(Blog),
  App: withLayout(AppPage),
  About: withLayout(About),
  Classes: withLayout(Classes),
  Clients: withLayout(Clients),
  Featured: withLayout(Featured),
};

export default Page;
