import React, { useState, useEffect } from 'react';
import fetchCards from '../API/fetchCards/fetchCards';
import ShowCards from './showCards/ShowCards';
import ShuffleCards from './ShuffleCards/ShuffleCards';
import Header from './Header/Header';
import GameMessage from './GameMessage/GameMessage';
import ClickCards from './ClickCards/ClickCards';

export default function Main() {
  const [cards, setCards] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [playerWon, setPlayerWon] = useState(true);

  const handleClickCards = (e) => {
    const gameData = ClickCards(e.target.id);
    setGameOver(gameData.gameOver);
    setScore(gameData.score);
    setPlayerWon(gameData.playerWon);
    setBestScore(gameData.bestScore);

    setCards(ShuffleCards(cards));
  };

  const getFetchCardss = async () => {
    const cardsAux = await fetchCards();
    setCards(cardsAux);
  };

  useEffect(() => {
    getFetchCardss();
  }, []);

  return (
    <div>
      <Header score={score} bestScore={bestScore} />
      <GameMessage gameOver={gameOver} playerWon={playerWon} score={score} />
      <ShowCards cards={cards} handleClickCards={handleClickCards} />
    </div>
  );
}
