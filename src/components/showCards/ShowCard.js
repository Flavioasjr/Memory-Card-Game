import React from 'react';
import PropTypes from 'prop-types';
import './ShowCards.css';

export default function ShowCard({ cards, handleClickCards }) {
  return (
    <div className="list-cards">
      {cards.length === 0 ? '' : cards.map((card) => (
        <div className="card" key={card.id} onClick={handleClickCards}>
          <img src={card.src} alt={card.name} key={card.id} className="img" id={card.id} />
        </div>
      ))}
    </div>
  );
}

ShowCard.propTypes = {
  cards: PropTypes.array.isRequired,
  handleClickCards: PropTypes.func.isRequired,
};
