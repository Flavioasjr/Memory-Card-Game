import React from 'react';
import PropTypes from 'prop-types';

export default function GameMessage({ gameOver, playerWon, score }) {
  if (playerWon) {
    return (
      <div data-testid="game-message-show">
        {!gameOver ? <h2 className="game-message-title">Choose your next Pokemon Card!</h2>
          : (
            <div>
              <h2 className="game-message-title message-winner">
                You Won! Your score was
                {' '}
                {score}
                .
              </h2>
              <p className="game-message">Click on a Pokemon Card to restart.</p>
            </div>
          )}
      </div>
    );
  }

  return (
    <div data-testid="game-message-show">
      {!gameOver ? <h2 className="game-message-title">Choose your next Pokemon Card!</h2>
        : (
          <div>
            <h2 className="game-message-title">
              Game Over! Your score was
              {' '}
              {score}
              .
            </h2>
            <p className="game-message">Click on a Pokemon Card to restart.</p>
          </div>
        )}
    </div>
  );
}

GameMessage.propTypes = {
  gameOver: PropTypes.bool.isRequired,
  playerWon: PropTypes.bool.isRequired,
  score: PropTypes.number.isRequired,
};
