import React, { useEffect, useState } from "react";

import GameItem from "../GameItem/GameItem";
import "./GamePage.css";

function GamePage() {
  const API_BASE_URL = "https://api.rawg.io/api/games";
  const API_KEY = "4c203b5a95f2416da233784b85c19f2c";
  const [gamesData, setGamesData] = useState([]);

  const getGamesData = async () => {
    const response = await fetch(`${API_BASE_URL}?page=1&key=${API_KEY}`);
    const data = await response.json();
    setGamesData(data.results);
    console.log(data.results);
  };

  useEffect(() => {
    getGamesData();
  }, []);

  return (
    <div className="game-page-container">
      {/* <GameRow /> */}
      {gamesData.map((game) => (
        <GameItem
          key={game.id}
          name={game.name}
          image={game.background_image}
        />
      ))}
    </div>
  );
}

export default GamePage;
