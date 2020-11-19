import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PokemonTile from "../Components/PokemonCard";
import ListPokemon from "../Utils/ApiPokemons";
import { useRouter } from 'next/router'

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

    function PokemonSelected(pokemonInfo){
      setPokemonSelected(pokemonInfo)
      router.push('./details')
    }

    return (
      <GridWrapper>
        {ListaPokemon.map((pokemon) => {
          <div onClick={() => PokemonSelected(pokemonInfo)}>
            return <PokemonTile pokemon={pokemon} />
          </div>
        })}
        
      </GridWrapper>
    );
  }