import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

export default function Header({ score, bestScore }) {
  return (
    <header className="header">
      <div><h1 className="title-header">Memory Game</h1></div>
      <div>
        <p>
          Score:
          {score}
        </p>
        <p>
          Best score:
          {bestScore}

        </p>
      </div>
    </header>
  );
}

Header.propTypes = {
  score: PropTypes.number.isRequired,
  bestScore: PropTypes.number.isRequired,
};
