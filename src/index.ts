//THIS IS THE ENTRY FILE - WRITE YOUR MAIN LOGIC HERE!

//Importieren von Funktionen und  Elementen aus anderen Modulen
import { buttonGenerateRandomNumber, buttonOutputFieldGiveNamesToList, buttonGetRandomNameFromList, buttonGetKopfOderZahl, buttonGetRandomColor } from "./domElements";
import { generateRandomNumber } from "./generateRandomNumber";
import { kopfOderZahl } from "./kopfOderZahl";
import { getNameFromInputAddToList, getRandomNameFromList } from "./listOfNames";
import { generateRandomColor } from "./randomColor";


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

//Button generiert 0 oder 1 für die Kopf oder Zahl Funktionalität
buttonGetKopfOderZahl.addEventListener("click", function(){
    kopfOderZahl();
});

//Button generiert Zufallsfarbe durch Funktionsaufruf
buttonGetRandomColor.addEventListener("click", function(){
    generateRandomColor();
});


