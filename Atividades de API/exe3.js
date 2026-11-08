async function buscarPokemon(nome) {
  const base = "https://pokeapi.co/api/v2/pokemon/";
  const resposta = await fetch(base + nome.toLowerCase());
  return await resposta.json();
}
 
function exibirPokemon(pokemon) {
  console.log(pokemon.name, "-", pokemon.types[0].type.name, "-", pokemon.weight / 10, "kg");
}
 
async function main() {
  let nomes = ["pikachu", "charmander", "bulbasaur", "squirtle", "eevee"];
 
  for (let i = 0; i < nomes.length; i++) {
    let pokemon = await buscarPokemon(nomes[i]);
    exibirPokemon(pokemon);
  }
}
main();
 