import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Main from './Main';

jest.mock('./Header/Header', () => function () {
  return (
    <header data-testid="header">Header</header>
  );
});

jest.mock('./GameMessage/GameMessage', () => function () {
  return (
    <div data-testid="game-message">Game Message</div>
  );
});

jest.mock('./showCards/ShowCards', () => function () {
  return (
    <div data-testid="show-cards">Show Cards</div>
  );
});

describe('Main component', () => {
  test('render Header component', () => {
    render(<Main />);

    const header = screen.queryByTestId('header');
    expect(header).toHaveTextContent('Header');
  });

  test('render GameMessage component', () => {
    render(<Main />);

    const gameMessage = screen.queryByTestId('game-message');
    expect(gameMessage).toHaveTextContent('Game Message');
  });

  test('render ShowCards component', () => {
    render(<Main />);

    const showCards = screen.queryByTestId('show-cards');
    expect(showCards).toHaveTextContent('Show Cards');
  });
});
