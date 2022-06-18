import React from 'react';
import FetchCard from './FetchCards/FetchCards';
import ShowCard from './showCards/ShowCard';

export default function Main() {
  const cards = FetchCard();

  return (
    <div>
      <ShowCard cards={cards} />
    </div>
  );
}
