'use strict';

// Crear las constantes de los elementos que vamos a utilizar

const button = document.querySelector('.js-button');
const select = document.querySelector('.js-select');
const inputNumer = document.querySelector('.js-inputNumber');
const result = document.querySelector('.js-result');



//Declarar funciones y eventos

function handleClick (event){
    
    event.preventDefault();
    console.log('holiiiisss');
}






function getRandomNumber(max) { 
    return Math.ceil(Math.random() * max); 
  } 

  button.addEventListener('click',handleClick);