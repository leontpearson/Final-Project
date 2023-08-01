import React from "react";

import "./GameItem.css";

function GameItem(game) {
  const { name, image } = game;

  return (
    <div className="game-item-container">
      <div className="game-name">
        <h3>{name}</h3>
      </div>
      <div className="game-image">
        <img src={image} alt={`${name} game poster`} />
      </div>
    </div>
  );
}

export default GameItem;
