

//Renderizando o HTML lista de Pokemons
function convertPokemonToHtml(pokemon) {
    return`
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
        </li>
    `
}

//Pegando Elemento HTML pelo id
const pokemonOl = document.getElementById('pokemonList');

//Listando items com a função  JavaScript Map
const ol = pokeApi.getPokemons().then((pokemons = []) => {
    pokemonOl.innerHTML += pokemons.map(convertPokemonToHtml).join('');
})

console.log(ol);