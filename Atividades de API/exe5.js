async function main() {
  const resposta = await fetch("https://jsonplaceholder.typicode.com/todos?userId=1");
  const tarefas = await resposta.json();
 
  let contador = 0;
  for (let i = 0; i < tarefas.length; i++) {
    if (tarefas[i].completed === true) {
      contador++;
    }
  }
 
  console.log("Tarefas concluídas:", contador, "de", tarefas.length);
}
main();
 