import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemons }) {
  
  const pokemonList = pokemons.map(pokemon => {
    return <PokemonCard 
    key={pokemon.id} 
    id={pokemon.id}
    name={pokemon.name}
    hp={pokemon.hp}
    front={pokemon.sprites.front}
    back={pokemon.sprites.back}
    /> 
  })

  return (
    <Card.Group itemsPerRow={6}>
      {pokemonList}
    </Card.Group>
  );
}

export default PokemonCollection;
