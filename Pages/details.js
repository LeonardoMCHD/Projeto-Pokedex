import React from 'react'
import styled from "styled-components"
import PokemonSelected from "./index"

const TileHolder = styled.div`
display: table-row;
align-items: center;
flex-wrap: wrap;
justify-content: center;
margin: 15px;
`;

const TileImage = styled.div`
img{
    width:400px;
    height:400px;
}
`;

const TileName = styled.div`
display: flex;
align-items: center;
flex-wrap: wrap;
justify-content: center;
margin: 15px;
color: black;
`;

const Types = styled.div`
display: flex;
align-items: center;
background-color: #C1BFC2;
color: black;
margin: 5px;
height: 20px;
`;

const Weight = styled.div`
align-items: center;
background-color: #C1BFC2;
margin: 5px;
height: 20px;
color: black;
`;

const Height = styled.div`
align-items: center;
background-color: #C1BFC2;
margin: 5px;
height: 20px;
color: black;
`;

export default function Teste(){
    return(
        <TileHolder>
            <div>
            <TileImage scr={PokemonSelected.PokemonSelected ? PokemonSelected.data.sprites.front_default : '../Public/Rocket.png'}></TileImage>
            </div>
            <div>
                <h1><TileName>
                    {PokemonSelected.PokemonSelected ? PokemonSelected.PokemonSelected.name : "Informação roubada pela Equipe Rocket"}
                    </TileName></h1>
            </div>
            <div>
                <Types>
                    {PokemonSelected.PokemonSelected ? PokemonSelected.PokemonSelected.data.types.map((tipos)=>{
                                return (
                                <div>
                                    {tipos.type && tipos.type.name}  
                                </div>)
                            }): "Desconhecido"}
                </Types>
            </div>
            <div>
                <Weight>
                    {PokemonSelected.PokemonSelected ? PokemonSelected.PokemonSelected.data.weight : "Desconhecido"}
                </Weight>
            </div>
            <div>
                <Height>
                    {PokemonSelected.PokemonSelected ? PokemonSelected.PokemonSelected.data.height : "Desconhecido"}
                </Height>
            </div>
        </TileHolder>
    );
}
