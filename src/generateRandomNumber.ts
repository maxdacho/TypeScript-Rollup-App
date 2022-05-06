import { outputFieldRandomNumber } from "./domElements";

//Funktion die Zufallszahl generiert
function generateRandomNumber() {
    let randomNumber: number = Math.round(Math.random() * 6);
    //Da der Würfel keine 0 hat muss diese ausgeschlossen werden
    if (randomNumber == 0) {
        randomNumber;
    }
    else {
        outputFieldRandomNumber.innerHTML = `${randomNumber}`;
    }

}

export { generateRandomNumber };