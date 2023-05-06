//Criando objeto pokeApi, obs objeto vazio 
const pokeApi = {}

//Função que pega o resultado em .json e organiza em uma resposta detalhada 
pokeApi.getPokemonsDatails = (pokemon) => {
    return fetch(pokemon.url).then((response) => response.json());
}


//Criando metodo para o objeto pokeApi metodo getPokemons  
pokeApi.getPokemons = (offset=0, limit=5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}t&limit=${limit}`;
    //Chamando API
    fetch(url)
    //Retornando valor 
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonsDatails))
    .then((datailRequests) => Promise.all(datailRequests))
    .then((pokemonsDatails) => pokemonsDatails)
    //Retornando erro
    .catch((error) => console.log(error))
}