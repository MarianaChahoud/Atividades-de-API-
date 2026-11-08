const prompt = require("prompt-sync")();
 
async function main() {
  let numero = parseInt(prompt("Número do post (1 a 100): "));
 
  if (isNaN(numero) || numero < 1 || numero > 100) {
    console.log("Número inválido!");
    return;
  }
 
  const resposta = await fetch("https://jsonplaceholder.typicode.com/posts/" + numero);
  const post = await resposta.json();
 
  console.log("Título:", post.title);
  console.log("Texto:", post.body);
}
main();
 