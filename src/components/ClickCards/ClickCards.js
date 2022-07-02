let cardsClicked = [];
let score = 0;
let bestScore = 0;
let gameOver = false;

export default function ClickCards(id) {
  let playerWon = false;
  if (gameOver) {
    score = 0;
    cardsClicked = [];
  }

  gameOver = cardsClicked.some((value) => value === id);
  cardsClicked = [...cardsClicked, id];

  if (gameOver) {
    if (score > bestScore) bestScore = score;
  } else score += 1;

  if (score >= 15) {
    gameOver = true;
    playerWon = true;
    bestScore = score;
    cardsClicked = [];

    return {
      gameOver,
      score,
      playerWon,
      bestScore,
    };
  }

  return {
    gameOver,
    score,
    playerWon,
    bestScore,
  };
}
