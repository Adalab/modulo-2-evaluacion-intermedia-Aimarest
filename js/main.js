"use strict";

// Crear las constantes de los elementos que vamos a utilizar

const button = document.querySelector(".js-button");
const select = document.querySelector(".js-select");
const inputNumber = document.querySelector(".js-inputNumber");
const result = document.querySelector(".js-result");
const goPlay = document.querySelector(".js-goPlay");
const money = document.querySelector(".js-money");
const reset = document.querySelector('.js-reset');

//Declarar funciones y eventos
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
function handleClick(event) {
  event.preventDefault();

  const number = getRandomNumber(6);
  const optionSelected = select.value;
  const apostado = inputNumber.value;
  result.innerHTML = `Resultado ${number}`;
  if (number === parseInt(optionSelected)) {
    goPlay.innerHTML = "Has ganado el doble de lo apostado! :)";
    addMoney(apostado);
  } else {
    goPlay.innerHTML = "Has perdido todo lo apostado! :(";
    restMoney(apostado);
  }

  const valor = money.innerHTML
  if (valor <= 0) {
    goPlay.innerHTML = "No tienes créditos para jugar! :(";
    money.innerHTML = 0
     playOff()
  } 

 
}
button.addEventListener("click", handleClick);

function addMoney(apostado) {
  money.innerHTML = parseInt(money.innerHTML) + 2 * apostado;
}
function restMoney(apostado) {
  money.innerHTML = parseInt(money.innerHTML) - apostado;
}


function playOff (){
    if (parseInt(money.innerHTML)>= 200){
        button.classList.add('hidden');
        reset.classList.remove('hidden');
    } else if (parseInt(money.innerHTML)<= 0){
      button.classList.add('hidden');
        reset.classList.remove('hidden');
    }
};

function handleClickReset(){
 reset.classList.add('hidden');
 button.classList.remove('hidden');
 money.innerHTML = '50';
 goPlay.innerHTML = 'Vamos a jugar!';
 inputNumber.value = '0';
 result.innerHTML = '';
 optionSelected = '¿qué número apuestas?' ;
}

reset.addEventListener('click',handleClickReset);