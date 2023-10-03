export interface IndexedPokemon {
  name: string;
  url: string;
}

export interface IndexedPokemonByType {
  pokemon: IndexedPokemon;
  slot: string;
}

export interface PokemonByTypeListRespons {
  id: number;
  pokemon: IndexedPokemonByType[];
}

export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IndexedPokemon[];
}

export interface ListPokemon {
  name: string;
  url: string;
  image: string;
  pokedexNumber: number;
}

export interface PokemonAbility {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonStats {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface DetailPokemon {
  name: string;
  types: PokemonType[];
  weight: number;
  height: number;
  abilities: PokemonAbility[];
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  stats: PokemonStats[];
  color: string | null;
  id: number;
}

export interface IndexedType {
  name: string;
  url: string;
  color: string;
}
