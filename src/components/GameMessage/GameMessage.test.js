import { render, screen } from '@testing-library/react';
import React from 'react';
import GameMessage from './GameMessage';

describe('Game Message component', () => {
  test('message while game does not over', () => {
    render(<GameMessage gameOver={false} playerWon={false} score={5} />);

    const gameMessage = screen.getByTestId('game-message-show');
    expect(gameMessage).toHaveTextContent('Choose your next Pokemon Card!');
  });

  test('message of game over', () => {
    render(<GameMessage gameOver playerWon={false} score={5} />);

    const gameMessage = screen.getByTestId('game-message-show');
    expect(gameMessage).toHaveTextContent('Game Over! Your score was 5.Click on a Pokemon Card to restart.');
  });

  test('message of You Won', () => {
    render(<GameMessage gameOver playerWon score={15} />);

    const gameMessage = screen.getByTestId('game-message-show');
    expect(gameMessage).toHaveTextContent('You Won! Your score was 15.Click on a Pokemon Card to restart.');
  });
});
