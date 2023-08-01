import { useState } from "react";

import "./SearchBox.css";

const API_BASE_URL = "https://api.rawg.io/api/games";
const API_KEY = "4c203b5a95f2416da233784b85c19f2c";

const SearchBox = () => {
  const [games, setGames] = useState([]);

  const getGameData = (event) => {
    event.preventDefault();
    const searchQuery = event.target.elements.search.value;
    fetch(
      `${API_BASE_URL}?page=1&key=${API_KEY}&search_precise=true&search=${searchQuery}`
    )
      .then((res) => res.json())
      .then((data) => {
        setGames(data.results);
        console.log(data.results);
      });
  };

  return (
    <div className="search-box-container">
      <form onSubmit={getaData}>
        <input type="text" name="search" placeholder="Search" />
        <button type="submit">Search</button>
      </form>
      <br />
      <div className="game-list">
        {games.map((game) => (
          <img key={game.id} src={game.background_image} alt={game.name} />
        ))}
      </div>
    </div>
  );
};

export default SearchBox;
