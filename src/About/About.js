import React, { useEffect, useState } from "react";

function About() {
  const API_BASE_URL = "https://api.rawg.io/api/games";
  const API_KEY = "4c203b5a95f2416da233784b85c19f2c";
  const [gamesData, setGamesData] = useState([]);

  const getGamesData = async () => {
    const response = await fetch(
      `${API_BASE_URL}?dates=2019-10-10,2020-10-10&ordering=-added&key=${API_KEY}`
    );
    const data = await response.json();
    setGamesData(data.results);
  };

  useEffect(() => {
    getGamesData();
  }, []);

  return (
    <div>
      <h2>Games List</h2>
      <ul>
        {gamesData.map((game) => (
          <li key={game.id}>
            {game.name}
            <p>
              <img src={game.background_image} alt="Background" />
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default About;
