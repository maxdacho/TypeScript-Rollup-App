import { outputFieldRandomNumber } from "./domElements";

//Funktion die Zufallszahl generiert
function generateRandomNumber(){
    let randomNumber : number = Math.round(Math.random() * 10);
    outputFieldRandomNumber.innerHTML = `${randomNumber}`;
}

export {generateRandomNumber};