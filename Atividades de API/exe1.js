async function main() {
  const resposta = await fetch("https://jsonplaceholder.typicode.com/users");
  const usuarios = await resposta.json();
 
  for (let i = 0; i < usuarios.length; i++) {
    console.log(usuarios[i].name, "-", usuarios[i].email);
  }
}
main();
 