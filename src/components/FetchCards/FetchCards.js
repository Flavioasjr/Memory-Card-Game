import { useEffect, useState } from 'react';
import { Pokedex } from 'pokeapi-js-wrapper';

export default function FetchCard() {
  const ids = [];

  for (let i = 1; i < 13; i += 1) {
    ids.push(i);
  }

  const [cards, setCards] = useState([]);

  function getImgData(cardsData) {
    const imgs = cardsData.map((card) => ({
      name: card.name,
      id: card.id,
      src: card.sprites.other['official-artwork'].front_default,
    }));
    return imgs;
  }

  const getCards = async (idsData) => {
    const pokedex = new Pokedex({ cacheImages: true });
    const card = await Promise.all(idsData.map((id) => pokedex.getPokemonByName(id)));
    const imgs = await getImgData(card);
    setCards(imgs);
  };

  useEffect(() => {
    getCards(ids);
  }, []);

  return cards;
}
