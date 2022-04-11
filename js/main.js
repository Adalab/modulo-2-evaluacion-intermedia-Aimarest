"use strict";

// Crear las constantes de los elementos que vamos a utilizar

const button = document.querySelector(".js-button");
const select = document.querySelector(".js-select");
const inputNumber = document.querySelector(".js-inputNumber");
const result = document.querySelector(".js-result");
const goPlay = document.querySelector(".js-goPlay");
const money = document.querySelector(".js-money");
const reset = document.querySelector(".js-reset");
let optionSelected = select.value;

//Declarar funciones y eventos

inputNumber.addEventListener("keyup", controlInput);
function controlInput() {
  const played = parseInt(inputNumber.value);
  const balance = parseInt(money.innerHTML);
  debugger;
  if (played > balance) {
    console.log("holis");
    button.classList.add("hidden");
    goPlay.innerHTML =
      "No tienes tantos créditos para apostar. Por favor apuesta una cantidad menor al saldo que tienes";
  }
  if (played <= balance) {
    button.classList.remove("hidden");
  }
}

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
function handleClick(event) {
  event.preventDefault();

  paintResult();
}
function paintResult() {
  const number = getRandomNumber(6);
  let apostado = inputNumber.value;
  result.innerHTML = `Éste es el número generado: ${number}`;
  if (number === parseInt(optionSelected)) {
    goPlay.innerHTML = "Has ganado el doble de lo apostado! :)";
    addMoney(apostado);
  } else {
    goPlay.innerHTML = "Has perdido todo lo apostado! :(";
    restMoney(apostado);
  }
  let valor = money.innerHTML;
  if (valor <= 0) {
    goPlay.innerHTML = "No tienes créditos para jugar! :(";
    money.innerHTML = 0;
    playOff();
  }
  if (valor >= 200) {
    goPlay.innerHTML = "Has ganado el máximo de dinero!!Vuelve a empezar :D;";
    playOff();
  }
}

button.addEventListener("click", handleClick);

function addMoney(apostado) {
  money.innerHTML = parseInt(money.innerHTML) + 2 * apostado;
}
function restMoney(apostado) {
  money.innerHTML = parseInt(money.innerHTML) - apostado;
}
function playOff() {
  if (parseInt(money.innerHTML) >= 200) {
    button.classList.add("hidden");
    reset.classList.remove("hidden");
  } else if (parseInt(money.innerHTML) <= 0) {
    button.classList.add("hidden");
    reset.classList.remove("hidden");
  }
}
function handleClickReset() {
  reset.classList.add("hidden");
  button.classList.remove("hidden");
  money.innerHTML = "50";
  goPlay.innerHTML = "Vamos a jugar!";
  inputNumber.value = "0";
  result.innerHTML = "";
  optionSelected = "¿qué número apuestas?";
}
reset.addEventListener("click", handleClickReset);
