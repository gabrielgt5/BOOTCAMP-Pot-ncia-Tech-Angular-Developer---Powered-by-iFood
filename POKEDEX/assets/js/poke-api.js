//Criando objeto pokeApi, obs objeto vazio 
const pokeApi = {}

//Criando metodo para o objeto pokeApi metodo getPokemons  
pokeApi.getPokemons = (offset=0, limit=10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}t&limit=${limit}`;
    //Chamando API
    fetch(url)
    //Retornando valor 
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    //Retornando erro
    .catch((error) => console.log(error))
}