import { inputFieldGiveNames, outputFieldNamesFromUserEntry, outputFieldRandomNameFromList } from "./domElements";

let divOutputFieldNames : HTMLElement;
let arrayNamesFromList : string[] = [];

//Funktion die Namen aus der Eingabe in eine Liste speichert
function getNameFromInputAddToList(){
    divOutputFieldNames = document.createElement('div') as HTMLElement;
    if (arrayNamesFromList.length ==7){
        return 0;

    }
    else{
    divOutputFieldNames.innerHTML = inputFieldGiveNames.value;
    outputFieldNamesFromUserEntry.appendChild(divOutputFieldNames);
    arrayNamesFromList.push(inputFieldGiveNames.value);
    
    } 
    
}

//Funktion die einen zufälligen Namen aus der zuvor erstellen Liste auswählt
function getRandomNameFromList(){
    let newArray : string [] = arrayNamesFromList.slice(0, -1);
    let randomNumberForNamesFromList : number = Math.round(Math.random() * newArray.length);
    outputFieldRandomNameFromList.innerHTML = `${arrayNamesFromList[randomNumberForNamesFromList]}`;
    
}

function resetInput(){
    inputFieldGiveNames.value = "";
    arrayNamesFromList = [];
    outputFieldNamesFromUserEntry.innerHTML = `${arrayNamesFromList}`;
    outputFieldRandomNameFromList. innerHTML = "";

}

export{getNameFromInputAddToList, getRandomNameFromList, resetInput};