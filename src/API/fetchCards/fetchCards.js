import { Pokedex } from 'pokeapi-js-wrapper';

export default async function fetchCards() {
  const randomIdStart = parseInt(Math.random() * 100 + 1, 10);
  const ids = [];

  for (let i = randomIdStart; i < randomIdStart + 15; i += 1) {
    ids.push(i);
  }

  function getPokemonsData(pokemons) {
    const pokemonsData = pokemons.map((pokemon) => ({
      name: pokemon.name,
      id: pokemon.id,
      src: pokemon.sprites.other['official-artwork'].front_default,
    }));
    return pokemonsData;
  }

  const getPokemons = async (idsData) => {
    const pokedex = new Pokedex({ cacheImages: true });
    const pokemons = await Promise.all(idsData.map((id) => pokedex.getPokemonByName(id)));
    const pokemonsData = await getPokemonsData(pokemons);
    return pokemonsData;
  };

  const cards = await getPokemons(ids);

  return cards;
}
