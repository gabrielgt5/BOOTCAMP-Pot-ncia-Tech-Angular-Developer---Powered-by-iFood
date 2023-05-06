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

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)
}  

//Criando metodo para o objeto pokeApi metodo getPokemons  
pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    //Chamando API
    return fetch(url)
    //Retornando valor 
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
    .then((datailRequests) => Promise.all(datailRequests))
    .then((pokemonsDatails) => pokemonsDatails)
}