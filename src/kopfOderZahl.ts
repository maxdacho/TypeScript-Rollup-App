import { outputFieldKopfOderZahl } from "./domElements";

//Funktion gibt zufällig Kopf oder Zahl aus
function kopfOderZahl() {
    let randomNumberKopfOderZahl: number = Math.round(Math.random());
    if (randomNumberKopfOderZahl == 0) {
        outputFieldKopfOderZahl.innerHTML = "Kopf";
    }
    else {
        outputFieldKopfOderZahl.innerHTML = "Zahl";
    }

}

export { kopfOderZahl };