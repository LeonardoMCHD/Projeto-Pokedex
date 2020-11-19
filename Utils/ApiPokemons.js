import axios from "axios";

export default async function ListPokemon(){
    return new Promise((resolve, reject) =>{
        axios
         .get("https://pokeapi.co/api/v2/pokemon?limit=40")
         .then((res) => resolve(res.data))
         .catch((error) => reject(error));
    });
}

