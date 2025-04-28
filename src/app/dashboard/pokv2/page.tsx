

const getData = async(limit = 10, offset = 0) => {
    //https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then((response) => response.json())
    return data;
}


export default async function Pokv2Page () {
    const data = await getData();
    console.log(data);
    return (
      <div>
        <h1>Pokemon Page V2</h1>
        { JSON.stringify(data) }

      </div>
    );
  };
