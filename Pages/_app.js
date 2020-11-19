import React, { useState, useEffect } from 'react'
import { createGlobalStyle, } from 'styled-components'
import 'antd/dist/antd.css'
import '../styles/index.css'
import Header from '../Components/Header.js'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-image: "../Public/Backgrund.png";
    font-family: 'Goldman', cursive;
  }
`;

  export default function App({ Component, pageProps}) {
    const [PokemonEndPoint, setPokemonEndPoint] = useState([]);
    const [PokemonSelected, setPokemonSelected] = useState();
    const [PokemonFullData, setPokemonFullData] = useState();
    
    let PokemonStaticDataArray = [];

useEffect(() => {
 PokemonEndPoint().then((resolve) => {
   setPokemonEndPoint(resolve.data.results);
   resolve.data.results.map((Pokemon) => {
     PokemonEndPointUrl(Pokemon.url).then((success) => {
       PokemonSelectedArray.push({name: Pokemon.name, data: success});
     });
   });

   setPokemonFullData(PokemonStaticDataArray);
   
 });
}, {});
  
     const changedProps = {
       ...pageProps,
       PokemonEndPoint: PokemonEndPoint,
       PokemonSelected: PokemonSelected,
       setPokemonSelected,
       PokemonFullData: PokemonFullData,
      };

    return (
      <>
        <GlobalStyle />
        <Header />
        
        <Component {...changedProps} />
      
      </>  
    )
  }