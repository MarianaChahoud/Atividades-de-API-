const prompt = require("prompt-sync")();
 
async function buscarNaApi(url) {
  const resposta = await fetch(url);
  if (!resposta.ok) {
    throw new Error("status " + resposta.status);
  }
  return await resposta.json();
}
 
async function pesquisarPokemon() {
  let nome = prompt("Nome do Pokémon: ").trim().toLowerCase();
 
  if (nome === "") {
    console.log("Digite um nome! Nenhuma requisição foi feita.");
    return;
  }
 
  try {
    let p = await buscarNaApi("https://pokeapi.co/api/v2/pokemon/" + nome);
    console.log("Encontrado:", p.name);
  } catch (erro) {
    console.log("Não encontrado:", nome);
  }
}
 
async function main() {
  await pesquisarPokemon();
}
main();