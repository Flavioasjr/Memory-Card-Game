import React from 'react';
import PropTypes from 'prop-types';
import './ShowCards.css';

export default function ShowCards({ cards, handleClickCards }) {
  return (
    <div data-testid="div-images" className="list-cards">
      {cards.length === 0 ? '' : cards.map((card) => (
        <div data-testid="click" className="card" key={card.id} onClick={handleClickCards}>
          <img data-testid="image" src={card.src} alt={card.name} key={card.id} className="img" id={card.id} />
        </div>
      ))}
    </div>
  );
}

ShowCards.propTypes = {
  cards: PropTypes.array.isRequired,
  handleClickCards: PropTypes.func.isRequired,
};
