//THIS IS THE ENTRY FILE - WRITE YOUR MAIN LOGIC HERE!

//Importieren von Funktionen und  Elementen aus anderen Modulen
import { buttonGenerateRandomNumber, buttonOutputFieldGiveNamesToList, buttonGetRandomNameFromList } from "./domElements";
import { generateRandomNumber } from "./generateRandomNumber";
import { getNameFromInputAddToList, getRandomNameFromList } from "./listOfNames";



//Button generiert Zufallszahl durch Funktionsaufruf
buttonGenerateRandomNumber.addEventListener("click", function(){
    generateRandomNumber();
});

//Button fügt Namen einer Liste hinzu die zuvor vom User eingegeben wurden
buttonOutputFieldGiveNamesToList.addEventListener("click", function(){
    getNameFromInputAddToList();
});

//Button gibt einen zufälligen Namen aus der zuvor erstellten Liste aus
buttonGetRandomNameFromList.addEventListener("click", function(){
    getRandomNameFromList();
});


