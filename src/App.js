import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Page from "./components/home/pages";
import HomePage from "./components/home/homePage";
import { Login, Signup } from "./components/console";
import Contact from "./components/home/contact";
import ConsoleRoute from "./components/console/console.route";
import UserContext from "./context/UserContext";
import { adminUser } from "./mockUser/MockUser";

const App = () => {
  const [user, setUser] = useState(adminUser);
  const value = {user, setUser};

  return (
    <UserContext.Provider value={value}>
      <div className="proloader">
        <div className="loader_34">
          <img className="loading" alt="" />
        </div>
      </div>
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
    </UserContext.Provider>
  );
};

export default App;
