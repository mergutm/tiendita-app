import Image from 'next/image';

import { PokemonsReponse, SimplePokemon } from "@/app/pokemons";
import { PokemonItem } from '@/app/components/PokemonItem';

const getData = async(limit = 150, offset = 0):Promise<SimplePokemon[]> => {
  console.log(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    const data:PokemonsReponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then((response) => response.json())
    
    const response = data.results.map( item => ({
        id: item.url.split('/').at(-2)!,
        name: item.name
    }) )
    console.log(response);
    return response;
}

export default async function PokemonPage () {
    const data = await getData();
    console.log(data);
    return (
      <div>
        <h1>Pokemon Page V1</h1>
        { 
         //JSON.stringify(data) 
         //data.map( item => <div key={item.id}>{item.name}</div>)
          
         //data.map( item => <PokemonItem key={item.id} {...item} />)
          
          data.map( item => <PokemonItem key={item.id} 
            id={item.id} name={item.name}
             />)
        }        
      </div>
    );
  };
