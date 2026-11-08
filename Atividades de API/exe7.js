async function main() {
  let numero = Math.floor(Math.random() * 151) + 1;
 
  const resposta = await fetch("https://pokeapi.co/api/v2/pokemon/" + numero);
  const pokemon = await resposta.json();
 
  console.log("Sorteado:", numero);
  console.log("Nome:", pokemon.name);
  console.log("Tipo:", pokemon.types[0].type.name);
  console.log("Altura:", pokemon.height / 10, "m");
  console.log("Peso:", pokemon.weight / 10, "kg");
}
main();
 