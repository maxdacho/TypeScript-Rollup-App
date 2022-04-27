//THIS IS THE ENTRY FILE - WRITE YOUR MAIN LOGIC HERE!
//Importieren von Funktionen und  Elementen aus anderen Modulen
import { buttonGenerateRandomNumber } from "./domElements";
import { generateRandomNumber } from "./generateRandomNumber";


//Button generiert Zufallszahl durch Funktionsaufruf
buttonGenerateRandomNumber.addEventListener("click", function(){
    generateRandomNumber();
});


