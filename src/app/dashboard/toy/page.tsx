
const respuesta = async (limit =5, offset = 0):Promise<SimplePokemon[]> => {
    //console.log(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    const data: PokemonsReponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then((response) => response.json())

    const pokemons = data.results.map(       
       pokemon => ({
            id: pokemon.url.split('/').at(-2)!,
            name: pokemon.name
        })

    );
    return pokemons;
}


export default  async function ToyPage() {
    const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=123&offset=0');
    const posts = await data.json();
    console.log(posts.results);
    return (
      <div className="flex flex-col items-center justify-center w-full h-full">
            Pagina de pokemones   
            <ul>
            {
                posts.results.map((post) => (
                 <li key={post.name}>{post.url}</li>
                ))
            }
      </ul>
      </div>
    );
  }
/*

  export default async function Page() {
    const data = await fetch('https://api.vercel.app/blog')
    const posts = await data.json()
    return (
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    )
  }
  */