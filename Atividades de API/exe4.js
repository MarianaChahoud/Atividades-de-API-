const prompt = require("prompt-sync")();
const URL_POKEAPI = "https://pokeapi.co/api/v2/pokemon/";
const URL_JSON = "https://jsonplaceholder.typicode.com";
 
async function buscarNaApi(url) {
  const resposta = await fetch(url);
  if (!resposta.ok) {
    throw new Error("status " + resposta.status);
  }
  return await resposta.json();
}
 
async function pesquisarPokemon(historico) {
  let nome = prompt("Nome do Pokémon: ").toLowerCase();
  try {
    let p = await buscarNaApi(URL_POKEAPI + nome);
    historico[historico.length] = {
      nome: p.name, numero: p.id,
      altura: p.height / 10, peso: p.weight / 10,
    };
    console.log("Encontrado:", p.name);
  } catch (erro) {
    console.log("Não encontrado:", nome);
  }
}
 
function exibirHistorico(historico) {
  if (historico.length === 0) {
    console.log("Histórico vazio!");
    return;
  }
  for (let i = 0; i < historico.length; i++) {
    console.log((i + 1) + " - " + historico[i].nome + " | nº " + historico[i].numero +
      " | " + historico[i].altura + " m | " + historico[i].peso + " kg");
  }
}
 
function pokemonMaisPesado(historico) {
  if (historico.length === 0) {
    console.log("Histórico vazio!");
    return;
  }
  let posicao = 0;
  for (let i = 1; i < historico.length; i++) {
    if (historico[i].peso > historico[posicao].peso) {
      posicao = i;
    }
  }
  console.log("Mais pesado:", historico[posicao].nome, "-", historico[posicao].peso, "kg");
}
 
async function buscarUsuario() {
  let id = parseInt(prompt("Id do usuário (1 a 10): "));
  try {
    let u = await buscarNaApi(URL_JSON + "/users/" + id);
    console.log("Nome:", u.name);
    console.log("E-mail:", u.email);
    console.log("Cidade:", u.address.city);
  } catch (erro) {
    console.log("Usuário não encontrado!");
  }
}
 
async function listarPosts() {
  try {
    let posts = await buscarNaApi(URL_JSON + "/posts?_limit=5");
    for (let i = 0; i < posts.length; i++) {
      console.log(posts[i].id, "-", posts[i].title.substring(0, 30));
    }
  } catch (erro) {
    console.log("Erro ao buscar posts!");
  }
}
 
async function main() {
  let historico = [];
  let opcao = -1;
 
  while (opcao !== 0) {
    console.log("\n1 - Pesquisar Pokémon");
    console.log("2 - Exibir histórico");
    console.log("3 - Buscar usuário");
    console.log("4 - Listar posts");
    console.log("5 - Pokémon mais pesado do histórico");
    console.log("0 - Sair");
    opcao = parseInt(prompt("Escolha: "));
 
    switch (opcao) {
      case 1: await pesquisarPokemon(historico); break;
      case 2: exibirHistorico(historico); break;
      case 3: await buscarUsuario(); break;
      case 4: await listarPosts(); break;
      case 5: pokemonMaisPesado(historico); break;
      case 0: console.log("Até logo!"); break;
      default: console.log("Opção inválida!");
    }
  }
}
main();
 