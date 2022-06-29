import React, { useState, useEffect } from 'react';
import fetchCards from '../API/fetchCards/fetchCards';
import ShowCards from './showCards/ShowCards';
import ShuffleCards from './ShuffleCards/ShuffleCards';
import Header from './Header/Header';

export default function Main() {
  const [cards, setCards] = useState([]);
  const [cardsClicked, setCardsClicked] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameOverMessage, setGameOverMessage] = useState('');

  const handleClickCards = (e) => {
    setGameOver(cardsClicked.some((value) => value === e.target.id));
    setCardsClicked([...cardsClicked, e.target.id]);
    setCards(ShuffleCards(cards));
    if (!gameOver) setScore(score + 1);
    setGameOverMessage('');
  };

  const getfetchCardss = async () => {
    const cardsAux = await fetchCards();
    setCards(cardsAux);
  };

  useEffect(() => {
    getfetchCardss();
  }, []);

  useEffect(() => {
    if (gameOver) {
      if (score > bestScore) setBestScore(score - 1);
      if (!gameOverMessage) {
        setGameOverMessage(
          <div>
            <h2 className="game-message-title">
              Game Over! Your score was
              {' '}
              {score - 1}
              .
            </h2>
            <p className="game-message">Click on a card to restart.</p>
          </div>,
        );
      }
      setScore(0);
      setGameOver(false);
      setCardsClicked([]);
    }
  }, [gameOver]);

  useEffect(() => {
    if (score === 15) {
      setGameOver(true);
      setBestScore(15);
      setGameOverMessage(
        <div>
          <h2 className="game-message-title message-winner">
            You Won! Your score was
            {' '}
            {score}
            .
          </h2>
          <p className="game-message">Click on a Pokemon Card to restart.</p>
        </div>,
      );
    }
  }, [score]);

  return (
    <div>
      <Header score={score} bestScore={bestScore} />
      {!gameOverMessage ? <h2 className="game-message-title">Choose your next Pokemon Card!</h2> : gameOverMessage}
      <ShowCards cards={cards} handleClickCards={handleClickCards} />
    </div>
  );
}
