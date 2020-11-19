import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PokemonTile from "../Components/PokemonCard";
import ListPokemon from "../Utils/ApiPokemons";

const GridWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  `;

  export default function index() {
    const [ListaPokemon, setListaPokemon] = useState([])
    
    
    useEffect(() => {
      ListPokemon().then( (success) => {
        setListaPokemon(success.results);
              })
    }, [])

    return (
      <GridWrapper>
        {ListaPokemon.map((pokemon) => {
          return <PokemonTile pokemon={pokemon} />
        })}
        
      </GridWrapper>
    );
  }