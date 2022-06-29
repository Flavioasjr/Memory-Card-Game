import fetchCards from './fetchCards';

describe('Fetch Pokemons Cards', () => {
  test('pokemons are rendered', async () => {
    const cards = await fetchCards();
    expect(cards).toHaveLength(15);
    expect(cards[0]).toEqual(
      expect.objectContaining({
        name: expect.any(String),
        id: expect.any(Number),
        src: expect.any(String),
      }),
    );
  });
});
