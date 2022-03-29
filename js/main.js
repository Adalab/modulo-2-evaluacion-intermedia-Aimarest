'use strict';

// Crear las constantes de los elementos que vamos a utilizar

const button = document.querySelector('.js-button');
const select = document.querySelector('.js-select');
const inputNumer = document.querySelector('.js-inputNumber');
const result = document.querySelector('.js-result');
const goPlay = document.querySelector('.js-goPlay')


//Declarar funciones y eventos
function getRandomNumber(max) { 
    return Math.ceil(Math.random() * max); 
}
function handleClick (event){
    event.preventDefault();

   const number = getRandomNumber(6);
  const optionSelected = select.value;
  result.innerHTML = number;
  console.log(number);
  if (number === parseInt(optionSelected)) {
      goPlay.innerHTML = 'Has ganado el doble de lo apostado! :)'
  } else {
      goPlay.innerHTML = 'Has perdido todo lo apostado! :('
  }
};








  button.addEventListener('click',handleClick);