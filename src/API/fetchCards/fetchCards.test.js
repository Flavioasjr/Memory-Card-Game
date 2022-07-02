const cardsPokemon = [];

for (let i = 0; i < 15; i += 1) {
  cardsPokemon[i] = {
    name: 'pokemon name',
    id: i,
    src: 'pokemon card url',
  };
}

const mockFetchCards = jest.fn();

describe('Fetch Pokemons Cards', () => {
  test('pokemons are rendered', async () => {
    mockFetchCards.mockReturnValue(cardsPokemon);
    expect(mockFetchCards()).toBe(cardsPokemon);
    expect(mockFetchCards).toHaveBeenCalledTimes(1);

    for (let i = 0; i < mockFetchCards().length; i += 1) {
      expect(mockFetchCards()[i]).toEqual(
        expect.objectContaining({
          name: expect.any(String),
          id: expect.any(Number),
          src: expect.any(String),
        }),
      );
    }
  });
});
