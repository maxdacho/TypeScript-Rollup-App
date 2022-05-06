import { outputFieldRandomColorCode, outputFieldRandomColor } from "./domElements";

//Funktion zur Generierung einer Zufallsfarbe im RGBA-Farbwert
function generateRandomColor() {
    let randomNumberForRGBValue1: number = Math.round(Math.random() * 255);
    let randomNumberForRGBValue2: number = Math.round(Math.random() * 255);
    let randomNumberForRGBValue3: number = Math.round(Math.random() * 255);
    let randomNumberForRGBAValue: number = Math.round(Math.random() * 100);

    //Der A-Wert liegt zwischen 0 und 1 und liegt als Zehntel Wert vor, deshalb diese Berechnung
    let dividedRGBAValue: number = randomNumberForRGBAValue / 100;

    let numberForColors: number[] = [];
    numberForColors = [randomNumberForRGBValue1, randomNumberForRGBValue2, randomNumberForRGBValue3, dividedRGBAValue];

    outputFieldRandomColor.style.backgroundColor = `rgba(${numberForColors})`;

    outputFieldRandomColorCode.innerHTML = `${numberForColors}`;

}

export { generateRandomColor };