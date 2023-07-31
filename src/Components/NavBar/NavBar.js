import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";
//import GamePage from "./Components/GamePage/GamePage";
//import PageNotFound from "../Components/PageNotFound/PageNotFound";

function NavBar() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        {/* <Route path="./" element={<PageNotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default NavBar;
