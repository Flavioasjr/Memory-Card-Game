import ShuffleCards from './ShuffleCards';

describe('Shuffle Pokemons Cards', () => {
  const cardsEmpty = [];
  const cards = [1, 2, 3, 4, 5];

  test('If cards is empty, do nothing', () => {
    const shuffleCards = ShuffleCards(cardsEmpty);
    expect(shuffleCards).toEqual(cardsEmpty);
  });

  test('If cards is not empty, shuffle', () => {
    const auxCards = [...cards];
    const shuffleCards = ShuffleCards(auxCards);

    expect(shuffleCards).not.toEqual(cards);
  });
});
