import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ShowCards from './ShowCards';
import '@testing-library/jest-dom';

describe('Show Cards component', () => {
  const cardsIds = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ];

  const cardsEmpty = [];
  const handleClickCards = jest.fn();

  test('number of cards to show', () => {
    render(<ShowCards cards={cardsIds} handleClickCards={handleClickCards} />);

    const imgs = screen.queryAllByTestId('image');
    expect(imgs).toHaveLength(cardsIds.length);
  });

  test('no cards to show', () => {
    render(<ShowCards cards={cardsEmpty} handleClickCards={handleClickCards} />);

    const divImages = screen.getByTestId('div-images');
    expect(divImages).toHaveTextContent('');
  });

  test('function called when click', () => {
    render(<ShowCards cards={cardsIds} handleClickCards={handleClickCards} />);

    const cards = screen.queryAllByTestId('click');

    userEvent.click(cards[0]);

    expect(handleClickCards).toHaveBeenCalledTimes(1);
  });
});
