'use strict';

// Crear las constantes de los elementos que vamos a utilizar

const button = document.querySelector('.js-button');
const select = document.querySelector('.js-select');
const inputNumer = document.querySelector('.js-inputNumber');
const result = document.querySelector('.js-result');



//Declarar funciones y eventos
function getRandomNumber(max) { 
    return Math.ceil(Math.random() * max); 
}
function handleClick (event){
    event.preventDefault();

   const number = getRandomNumber(6);
  const optionSelected = select.value;
}








  button.addEventListener('click',handleClick);