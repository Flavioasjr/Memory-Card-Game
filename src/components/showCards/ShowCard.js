import React from 'react';
import PropTypes from 'prop-types';
import './ShowCards.css';

export default function ShowCard({ cards }) {
  return (
    <div className="list-cards">
      {cards.length === 0 ? '' : cards.map((card) => (
        <div className="card" key={card.id}>
          <img src={card.src} alt={card.name} key={card.id} className="img" />
        </div>
      ))}
    </div>
  );
}

ShowCard.propTypes = {
  cards: PropTypes.array.isRequired,
};
