import { Link, Routes, Route } from "react-router-dom";

import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";
import GamePage from "../GamePage/GamePage";
import SearchResults from "../SearchResults/SearchResults";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <Link to="/Games">Games</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/SearchResults" element={<SearchResults />} />
      </Routes>
      <Routes>
        <Route path="/Games" element={<GamePage />} />
      </Routes>
    </nav>
  );
}

export default NavBar;
