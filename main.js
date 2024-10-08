"use strict";

/*Cuando la usuaria hace click en el botón:
se recogen los datos del input que ha escrito la usuaria

si el valor del input es mayor que el numero aleatorio: demasiado alto
si es menor: demasiado bajo
si es igual: has ganado campeona!
si no introduce un numero valido: el numero debe de estar entre 1 y 100*/

/*SE GENERA UN NUMERO ALEATORIO
EVENTO CLICK DONDE PASAN DOS COSAS: 
SE COMPARA ESE NUMERO CON EL QUE HA ESCRITO LA USUARIA CON EL NUMERO ALEATORIO GENERADO
CONTABILIZAR LOS INTENTOS/CLICKS DE LA USUARIA*/

const button = document.querySelector(".js-button");
const inputNumber = document.querySelector(".js-inputNumber");
const clue = document.querySelector(".js-p-clue");
const tries = document.querySelector(".tries");

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const getNumber = getRandomNumber(100);
console.log("el numero generado es:", getNumber);

function comparateValues() {
  const inputValue = parseInt(inputNumber.value);

  if (!inputValue) {
    clue.innerHTML = "Por favor, introduce un numero";
  } else if (inputValue < 1 || inputValue > 100) {
    clue.innerHTML = "Pista: El número debe estar entre 1 y 100";
  } else if (inputValue > getNumber) {
    clue.innerHTML = "Pista: El número que has introducido es demasiado alto";
  } else if (inputValue < getNumber) {
    clue.innerHTML = "Pista: El número que has introducido es demasiado bajo";
  } else if (inputValue === getNumber) {
    clue.innerHTML = "¡HAS GANADO CAMPEONA!";
  }
}

let clickCount = 0;

const handleClick = (event) => {
  event.preventDefault();
  comparateValues();

  clickCount++;
  tries.innerHTML = `Número de intentos: ${clickCount}`;
};

button.addEventListener("click", handleClick);
