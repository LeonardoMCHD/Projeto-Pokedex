import React from 'react'
import styled from "styled-components"

const TileHolder = styled.div`
display: table-row;
align-items: center;
flex-wrap: wrap;
justify-content: center;
border: 1px solid #C1BFC2;
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
border: 1px solid #C1BFC2;
top: 0;
`;

export default function Teste(){
    return(
        <TileHolder>
            <div>
            <TileImage>
            <img src={"https://cdn.bulbagarden.net/upload/c/c8/Rocket-logo.png"} />
            </TileImage>
            </div>
            <div><TileName>
                <div>
                <h1>Roubado pela Equipe Rocket</h1>
                </div>
               
            </TileName></div>
            <div>
                    <h3>Types</h3>
                </div>
                <div>
                    <h4>Ability</h4>
                </div>
        </TileHolder>
    )
}
