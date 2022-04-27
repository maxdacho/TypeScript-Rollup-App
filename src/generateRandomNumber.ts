import { outputFieldRandomNumber } from "./domElements";

//Funktion die Zufallszahl generiert
function generateRandomNumber(){
    let zufallsZahl = Math.round(Math.random() * 10);
    outputFieldRandomNumber.innerHTML = `${zufallsZahl}`;
}

export {generateRandomNumber};