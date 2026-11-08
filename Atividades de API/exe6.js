async function main() {
  const resposta = await fetch("https://jsonplaceholder.typicode.com/comments?postId=1");
  const comentarios = await resposta.json();
 
  for (let i = 0; i < comentarios.length; i++) {
    console.log(comentarios[i].email);
  }
}
main();
 