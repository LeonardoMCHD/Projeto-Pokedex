const { useState, useEffect } = require("react")
import styled from "styled-components";
import GetPokemonData from "../Utils/GetPokemonData";

const TileHolder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `;

const TileWrapper = styled.div`
    background-color: white;
    padding: 15px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border: 1px solid #C1BFC2;
    width: 200px;
    height: 200px;
    margin: 15px;
    transition: all 0,3s cubic-bezier(0.25, 0.8, 0.25, 1);
    &:hover {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }
    img{
        width:150px;
        height:150px;
    }
    `;

    const PokemonName = styled.div`
        background: #C1BFC2;
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 0;
        color: #fff;
        text-align: center;
        font-size: 20px;
        height: 30px;
        `;

        const PokemonTypes = styled.div`
         background: #adadad;
         width: 30px;
         position: absolute;
         top: 0;
         right: 0;
         color: black;
         text-align: center;
         height: 30px;

        `;
        
               
        export default function PokemonTile({ pokemon }) {
            const [PokemonInfo, setPokemonInfo] = useState({})

        useEffect(() => {
            GetPokemonData(pokemon.url)
            .then(( success ) => {
                console.log("Deu Bom", success)
                setPokemonInfo(success)
            })
            .catch((error) => {
                console.log(error)
            });
        }, []);
            return (
                <TileHolder>
                    <TileWrapper>
                    <img src={PokemonInfo.sprites ? PokemonInfo.sprites.front_default : "https://pngimg.com/uploads/pokeball/pokeball_PNG21.png"} />
                    <PokemonName>{pokemon.name ? pokemon.name : "unknown"}</PokemonName>
                <PokemonTypes>{pokemon.id ? pokemon.id : "alo"}</PokemonTypes>
                </TileWrapper>
                </TileHolder>
            );
        }