import axios from "axios";

export default async function GetPokemonData(url){
    return new Promise((resolve, reject) =>{
        axios
         .get(url)
         .then((res) => resolve(res.data))
         .catch((error) => reject(error));
    });
}
