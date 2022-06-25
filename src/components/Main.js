import React, { useState, useEffect } from 'react';
import FetchCard from './FetchCards/FetchCards';
import ShowCard from './showCards/ShowCard';
// import HandleGameBoard from './HandleGameBoard/HandleGameBoard';
import ShuffleCards from './ShuffleCards/ShuffleCards';
import Header from './Header/Header';

export default function Main() {
  // Perguntar a kaue o motivo de funcionar usando o setState de um array diferente
  // Por que nao funciona o setState com cards.
  // Como transferir isso para outro módulo.
  // const [shuffledCards, setShuffledCards] = useState([]);
  let cards = FetchCard();
  const [cardsClicked, setCardsClicked] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameOverMessage, setGameOverMessage] = useState('');

  const handleClickCards = (e) => {
    // const data = HandleGameBoard(cards, e);
    setGameOver(cardsClicked.some((value) => value === e.target.id));
    setCardsClicked([...cardsClicked, e.target.id]);
    // setShuffledCards(ShuffleCards(cards));
    cards = ShuffleCards(cards);
    if (!gameOver) setScore(score + 1);
    setGameOverMessage('');
  };

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
      <ShowCard cards={cards} handleClickCards={handleClickCards} />
    </div>
  );
}
