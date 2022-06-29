import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import '@testing-library/jest-dom';

describe('Header component', () => {
  const score = 10;
  const bestScore = 15;

  test('The score is show', () => {
    render(<Header score={score} bestScore={bestScore} />);

    const paragraph = screen.getByText('Score:10');
    expect(paragraph).toHaveTextContent('Score:10');
  });

  test('The best score is show', () => {
    render(<Header score={score} bestScore={bestScore} />);

    const paragraph = screen.getByText('Best score:15');
    expect(paragraph).toHaveTextContent('Best score:15');
  });

  test('Title is to have title-header class', () => {
    render(<Header score={score} bestScore={bestScore} />);

    const title = screen.getByText('Memory Game');
    expect(title).toHaveClass('title-header');
  });
});
