import Image from 'next/image'

import { SimplePokemon } from "../pokemons/interfaces/simple-pokemon"

export const PokemonItem = ( {id, name} :SimplePokemon ) => {
      return (
        <div>
           

            <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`} 
                width = {100}
                height = {120}
                alt = "Pokemon"
            />    

            <span className="bg-green-500 rounded-md px-2">
                {name}  
            </span>
            
        </div>
    )
  }