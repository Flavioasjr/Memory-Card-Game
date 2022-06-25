import React, { useState, useEffect } from 'react';
import ShuffleCards from '../ShuffleCards/ShuffleCards';

export default function HandleGameBoard(cards, e) {
  const [cardsClicked, setCardsClicked] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameOverMessage, setGameOverMessage] = useState('');

  setGameOver(cardsClicked.some((value) => value === e.target.id));
  setCardsClicked([...cardsClicked, e.target.id]);
  // setShuffledCards(ShuffleCards(cards));
  cards = ShuffleCards(cards);
  if (!gameOver) setScore(score + 1);
  setGameOverMessage('');

  useEffect(() => {
    if (gameOver) {
      if (score > bestScore) setBestScore(score - 1);
      setGameOverMessage(
        <div>
          Game Over. Your score is
          {' '}
          {score - 1}
        </div>,
      );
      setScore(0);
      setGameOver(false);
      setCardsClicked([]);
    }
  }, [gameOver]);

  useEffect(() => {
    if (score === 15) {
      setGameOver(true);
      setBestScore(15);
    }
  }, [score]);

  return [score, bestScore, gameOverMessage];
}
