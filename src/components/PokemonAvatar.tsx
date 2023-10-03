import { useEffect, useState } from "react";
import { DetailPokemon } from "../interfaces/pokemon.interface"
import { getColorFromUrl } from "../utils/colors";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

interface PokemonAvatarProp {
    pokemon: DetailPokemon
}

const PokemonAvatar = ({ pokemon }: PokemonAvatarProp) => {


    return (
        <Card sx={{ backgroundColor: pokemon.color }}>
            <CardMedia
                component="img"
                alt="pokemonArt"
                sx={{ height: 100, objectFit: "contain" }}
                image={pokemon.sprites.other["official-artwork"].front_default}
                title={pokemon.name}
            />
            <CardContent>
                <Box>
                    <Typography textAlign="center" textTransform="capitalize" fontSize={30} fontWeight={600} sx={{color:"white"}}
                    >
                        {pokemon.name}
                    </Typography>
                    <Typography textAlign="center" textTransform="capitalize" fontSize={30} sx={{color:"white"}}
                    >
                        #{pokemon.id}
                    </Typography>
                </Box>

            </CardContent>
        </Card>
    )
}

export default PokemonAvatar