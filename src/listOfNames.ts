import { inputFieldGiveNames, outputFieldNamesFromUserEntry, outputFieldRandomNameFromList } from "./domElements";

//Zwei globale Variablen um von überall aus der Datei darauf zugreifen zu können
let divOutputFieldNames: HTMLElement;
let arrayNamesFromList: string[] = [];

//Funktion die Namen aus der Eingabe in eine Liste speichert
function getNameFromInputAddToList() {
    divOutputFieldNames = document.createElement('div') as HTMLElement;
    if (arrayNamesFromList.length == 7) {
        return 0;

    }
    else {
        divOutputFieldNames.innerHTML = inputFieldGiveNames.value;
        outputFieldNamesFromUserEntry.appendChild(divOutputFieldNames);
        //Hinzufügen zum Array
        arrayNamesFromList.push(inputFieldGiveNames.value);

    }

}

//Funktion die einen zufälligen Namen aus der zuvor erstellen Liste auswählt
function getRandomNameFromList() {
    //Notwendiger Schritt um die Array-Länge zu kürzen, Lösung durch Hilfsvariable
    let newArray: string[] = arrayNamesFromList.slice(0, -1);
    let randomNumberForNamesFromList: number = Math.round(Math.random() * newArray.length);
    outputFieldRandomNameFromList.innerHTML = `${arrayNamesFromList[randomNumberForNamesFromList]}`;

}

//Funktion zum Zurücksetzen
function resetInput() {
    inputFieldGiveNames.value = "";
    arrayNamesFromList = [];
    outputFieldNamesFromUserEntry.innerHTML = `${arrayNamesFromList}`;
    outputFieldRandomNameFromList.innerHTML = "";

}

export { getNameFromInputAddToList, getRandomNameFromList, resetInput };