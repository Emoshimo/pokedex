import {
  Card,
  CardContent,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { DetailPokemon } from "../interfaces/pokemon.interface";

interface PokemonStatsProps {
  pokemon: DetailPokemon;
}

const PokemonStats = ({ pokemon }: PokemonStatsProps) => {
  return (
    <Card sx={{ backgroundColor: pokemon.color }}>
      <CardContent>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item>
            {pokemon ? (
              <Table size="small">
                <TableHead>
                  <TableRow>
                    {pokemon.stats.map((stat) => {
                      return (
                        <TableCell
                          sx={{
                            fontWeight: "bold",
                            textTransform: "capitalize",
                            color: "white",
                          }}
                        >
                          {stat.stat.name}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {pokemon.stats.map((stat) => {
                    return (
                      <TableCell sx={{ fontWeight: "bold", color: "white" }}>
                        {stat.base_stat}
                      </TableCell>
                    );
                  })}
                </TableBody>
              </Table>
            ) : null}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PokemonStats;
