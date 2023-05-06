//Criando objeto pokeApi, obs objeto vazio 
const pokeApi = {}

//Função que pega o resultado em .json e organiza em uma resposta detalhada 
function convertPokeApiDetailToPokemon(pokeDetail) {
    //crie uma novo objeto baseado no meu pokemon-model 
    const pokemon = new Pokemon()

    //Atribuindo os valos para o obejto objeto.atributo = valor
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
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