import { Link, useParams } from "react-router-dom";
import usePokemonDetail from "../hooks/usePokemonDetail";
import { Box, Button, Container } from "@mui/material";
import { Grid } from "@mui/material";
import PokemonAvatar from "./PokemonAvatar";
import PokemonInfo from "./PokemonInfo";
import PokemonStats from "./PokemonStats";

const PokemonDetail = () => {
  let { pokemonName } = useParams();

  const { pokemon, isLoading } = usePokemonDetail({ pokemonName });

  return (
    <Container>
      <Grid
        container
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        spacing={2}
        mt={2}
      >
        <Grid
          item
          container
          alignItems="center"
          justifyContent="center"
          spacing={2}
          flexDirection="row"
        >
          {isLoading ? (
            <Box>Loading...</Box>
          ) : pokemon ? (
            <>
              <Grid item xs={12} sm={6}>
                <PokemonAvatar pokemon={pokemon} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <PokemonInfo pokemon={pokemon} />
              </Grid>

              <Grid item xs={12} sm={6}>
                <PokemonStats pokemon={pokemon} />
              </Grid>
            </>
          ) : (
            <Box>Pokemon Not found</Box>
          )}
        </Grid>

        <Grid item>
          <Button component={Link} to={"/"} variant="contained">
            Go to Pokemon List
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PokemonDetail;
