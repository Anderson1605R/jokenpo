const array = ["pedra", "papel", "tesoura"];
const pedra = document.querySelector("button#pedra"),
  papel = document.querySelector("button#papel"),
  tesoura = document.querySelector("button#tesoura");
const res = document.querySelector("div#res");
const comValue = document.querySelector("div#computer-value");
const playerValue = document.querySelector("div#player-value");
let computerValue;

pedra.addEventListener("click", allFunctions);
papel.addEventListener("click", allFunctions);
tesoura.addEventListener("click", allFunctions);

function player(event) {
  const value = event.target.value;
  return value;
}
function computer() {
  const index = Math.floor(Math.random() * array.length);
  const computerRes = array[index];
  computerValue = index;
  return computerRes;
}
function comparison(player, computer) {
  if (computer === player) {
    const comDiv = document.createElement("p");
    comDiv.innerHTML = `Computador: ${array[computerValue]}`;
    document.querySelector("div#computer-value").appendChild(comDiv);

    const para = document.createElement("p");
    para.innerHTML = "Empate!";
    document.querySelector("div#res").appendChild(para);
  } else if (
    (player === "pedra" && computer === "tesoura") ||
    (player === "papel" && computer === "pedra") ||
    (player === "tesoura" && computer === "papel")
  ) {
    const comDiv = document.createElement("p");
    comDiv.innerHTML = `Computador: ${array[computerValue]}`;
    document.querySelector("div#computer-value").appendChild(comDiv);

    const para = document.createElement("p");
    para.innerHTML = "Jogador venceu!";
    document.querySelector("div#res").appendChild(para);
  } else {
    const comDiv = document.createElement("p");
    comDiv.innerHTML = `Computador: ${array[computerValue]}`;
    document.querySelector("div#computer-value").appendChild(comDiv);

    const para = document.createElement("p");
    para.innerHTML = "Computador ganhou!";
    document.querySelector("div#res").appendChild(para);
  }
}
function allFunctions(event) {
  comValue.innerHTML = "";
  playerValue.innerHTML = "";
  res.innerHTML = "";
  const playerChoice = player(event);
  const computerChoice = computer();
  comparison(playerChoice, computerChoice);
}
