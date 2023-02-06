function inserirImagemPokemon(dado) {
    const img = document.getElementById("img");
        img.setAttribute("src", dado.sprites.front_default);
    const nome = document.getElementById("nome");
    nome.textContent = dado.name; 
}

const getPokeApi = async() =>{
    const idPokemon = Math.floor(Math.random() * (100 - 1 + 1) + 1);
    const url =`https://pokeapi.co/api/v2/pokemon/${idPokemon}`;
    const response = await fetch(url);
    const dado = await response.json();
    inserirImagemPokemon(dado);
}

document.getElementById("botao").addEventListener("click", getPokeApi);

getPokeApi()

