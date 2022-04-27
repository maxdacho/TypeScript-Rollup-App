import { inputFieldGiveNames, outputFieldNamesFromUserEntry, outputFieldRandomNameFromList } from "./domElements";

let arrayNamesFromList : string[] = [];

//Funktion die Namen aus der Eingabe in eine Liste speichert
function getNameFromInputAddToList(){
    let divOutputFieldNames = document.createElement('div') as HTMLElement;
    divOutputFieldNames.innerHTML = inputFieldGiveNames.value;
    outputFieldNamesFromUserEntry.appendChild(divOutputFieldNames);
    arrayNamesFromList.push(inputFieldGiveNames.value); 
    
}

//Funktion die einen zufälligen Namen aus der zuvor erstellen Liste auswählt
function getRandomNameFromList(){
    let newArray : string [] = arrayNamesFromList.slice(0, -1);
    let randomNumberForNamesFromList : number = Math.round(Math.random() * newArray.length);
    outputFieldRandomNameFromList.innerHTML = `${arrayNamesFromList[randomNumberForNamesFromList]}`;
    
}

export{getNameFromInputAddToList, getRandomNameFromList};