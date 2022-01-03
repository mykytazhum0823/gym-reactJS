import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Page from "./components/home/pages";
import HomePage from "./components/home/homePage";
import { Login, Signup } from "./components/console";
import Contact from "./components/home/contact/Contact";
import ConsoleRoute from "./components/console/console.route";

const App = () => {
  return (
    <div className="page-wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<Page.About />} />
          <Route path="/app" element={<Page.App />} />
          <Route path="/blog" element={<Page.Blog />} />
          <Route path="/classes" element={<Page.Classes />} />
          <Route path="/clients" element={<Page.Clients />} />
          <Route path="/cta" element={<Page.CTA />} />
          <Route path="/faq" element={<Page.FAQ />} />
          <Route path="/featured" element={<Page.Featured />} />
          <Route path="/console/*" element={<ConsoleRoute />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
