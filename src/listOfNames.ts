import { inputFieldGiveNames, outputFieldNamesFromUserEntry } from "./domElements";

//Funktion die Namen aus der Eingabe in eine Liste speichert
function getNameFromInputAddToList(){
    let divOutputFieldNames = document.createElement('div') as HTMLElement;
    divOutputFieldNames.innerHTML = inputFieldGiveNames.value;
    outputFieldNamesFromUserEntry.appendChild(divOutputFieldNames);
    
}

export{getNameFromInputAddToList};