import PokemonList from "../components/PokemonList";
import usePokemon from "../hooks/usePokemon";
import { Container, Button, Grid } from "@mui/material";
import { IndexedType } from "../interfaces/pokemon.interface";

const Home = () => {
  const {
    pokemons,
    hasMorePokemon,
    fetchNextPage,
    pokemonTypes,
    selectedType,
    setSelectedType,
    setPokemons,
  } = usePokemon();

  const handleSelectedType = (type: IndexedType | null) => {
    if (type) {
      setSelectedType(type);
    } else {
      setPokemons([]);
      setSelectedType(type);
    }
  };

  return (
    <Container>
      <Grid container spacing={2} mt={1}>
        <Grid
          container
          item
          m={2}
          p={2}
          xs={12}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          {pokemonTypes.map((type) => {
            return (
              <Button
                variant="contained"
                sx={{ backgroundColor: type.color, m: 1 }}
                onClick={() => handleSelectedType(type)}
              >
                {type.name}
              </Button>
            );
          })}
          <Button
            variant="contained"
            sx={{ m: 1 }}
            onClick={() => handleSelectedType(null)}
          >
            All
          </Button>
        </Grid>

        <Grid
          container
          item
          xs={12}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <PokemonList pokemons={pokemons}></PokemonList>
        </Grid>
      </Grid>
      {selectedType === null && hasMorePokemon ? (
        <Button variant="contained" onClick={fetchNextPage}>
          Load More Pokemon
        </Button>
      ) : null}
    </Container>
  );
};

export default Home;
