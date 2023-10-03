import { useEffect, useState } from "react";
import {
  IndexedPokemon,
  IndexedType,
  ListPokemon,
  PokemonByTypeListRespons,
  PokemonListResponse,
} from "../interfaces/pokemon.interface";
import {
  POKEMON_API_POKEMON_URL,
  POKEMON_IMAGE_BASE_URL,
  POKEMON_TYPES,
} from "../constants";
import { httpClient } from "../api/httpClient";

const usePokemon = () => {
  const [pokemons, setPokemons] = useState<ListPokemon[]>([]);
  const [nextUrl, setNextUrl] = useState<string | null>(
    POKEMON_API_POKEMON_URL
  );
  const [selectedType, setSelectedType] = useState<IndexedType | null>(null);

  useEffect(() => {
    if (selectedType) {
      fetchPokemonsByType();
    } else {
      fetchPokemon();
    }
  }, [selectedType]);

  const fetchPokemonsByType = async () => {
    if (selectedType) {
      const result = await httpClient.get<PokemonByTypeListRespons>(
        selectedType.url
      );
      if (result?.data?.pokemon) {
        const listPokemons = result.data.pokemon.map((p) =>
          indexedPokemonToListPokemon(p.pokemon)
        );

        const filteredPokemons = listPokemons.filter(
          (pokemon) => pokemon.pokedexNumber < 10264
        );

        setPokemons(filteredPokemons);
        setNextUrl(POKEMON_API_POKEMON_URL);
      }
    }
  };

  const indexedPokemonToListPokemon = (indexedPokemon: IndexedPokemon) => {
    const pokedexNumber = parseInt(
      indexedPokemon.url
        .replace(`${POKEMON_API_POKEMON_URL}/`, "")
        .replace("/", "")
        .replace("/", "")
    );

    const listPokemon: ListPokemon = {
      name: indexedPokemon.name,
      url: indexedPokemon.url,
      image: `${POKEMON_IMAGE_BASE_URL}/${pokedexNumber}.png`,
      pokedexNumber: pokedexNumber,
    };

    return listPokemon;
  };

  const fetchPokemon = async () => {
    if (nextUrl) {
      const result = await httpClient.get<PokemonListResponse>(nextUrl);
      if (result?.data?.results) {
        const listPokemons = result.data.results.map((p) =>
          indexedPokemonToListPokemon(p)
        );

        const filteredPokemons = listPokemons.filter(
          (pokemon) => pokemon.pokedexNumber < 10264
        );

        setPokemons([...pokemons, ...filteredPokemons]);
        setNextUrl(result.data.next);
      }
    }
  };

  return {
    pokemons,
    fetchNextPage: fetchPokemon,
    hasMorePokemon: !!nextUrl,
    pokemonTypes: POKEMON_TYPES,
    selectedType,
    setSelectedType,
    setPokemons,
  };
};
export default usePokemon;
