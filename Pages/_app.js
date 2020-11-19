import React, { useState } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import 'antd/dist/antd.css'
import '../styles/index.css'
import Header from '../Components/Header.js'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-image: '../Public/Backgrund.png';
    font-family: 'Goldman', cursive;
  }
`
const theme = {
    colors: {
      primary: '#ef5350',
    },
  }
  
  export default function App({ Component, pageProps}) {
    const [PokemonSelected, setPokemonSelected] = useState()
  
     const changedProps = {...pageProps, PokemonSelected: PokemonSelected, setPokemonSelected}
  
    return (
      <>
        <GlobalStyle />
        <Header />
          <Component {...changedProps} />
      </>  
    )
  }