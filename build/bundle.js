(function () {
    'use strict';

    // Elemente zur Ausgabe einer Zufallszahl
    let outputFieldRandomNumber = document.getElementById('outputRandomNumber');
    let buttonGenerateRandomNumber = document.getElementById('buttonGenerateRandomNumber');
    //Elemente zur Erstellung einer Liste mit Namen nach User Eingabe
    let inputFieldGiveNames = document.getElementById('addName');
    let outputFieldNamesFromUserEntry = document.getElementById('outputNamesFromList');
    let buttonOutputFieldGiveNamesToList = document.getElementById('buttonPutNameToList');
    //Elemente zur Ausgabe eines zufälligen Namens aus der zuvor erstellten Liste
    let outputFieldRandomNameFromList = document.getElementById('outputRandomNameFromList');
    let buttonGetRandomNameFromList = document.getElementById('buttonGetRandomNameFromList');

    //Funktion die Zufallszahl generiert
    function generateRandomNumber() {
        let randomNumber = Math.round(Math.random() * 6);
        if (randomNumber == 0) ;
        else {
            outputFieldRandomNumber.innerHTML = `${randomNumber}`;
        }
    }

    let arrayNamesFromList = [];
    //Funktion die Namen aus der Eingabe in eine Liste speichert
    function getNameFromInputAddToList() {
        let divOutputFieldNames = document.createElement('div');
        divOutputFieldNames.innerHTML = inputFieldGiveNames.value;
        outputFieldNamesFromUserEntry.appendChild(divOutputFieldNames);
        arrayNamesFromList.push(inputFieldGiveNames.value);
    }
    //Funktion die einen zufälligen Namen aus der zuvor erstellen Liste auswählt
    function getRandomNameFromList() {
        let newArray = arrayNamesFromList.slice(0, -1);
        let randomNumberForNamesFromList = Math.round(Math.random() * newArray.length);
        outputFieldRandomNameFromList.innerHTML = `${arrayNamesFromList[randomNumberForNamesFromList]}`;
    }

    //THIS IS THE ENTRY FILE - WRITE YOUR MAIN LOGIC HERE!
    //Button generiert Zufallszahl durch Funktionsaufruf
    buttonGenerateRandomNumber.addEventListener("click", function () {
        generateRandomNumber();
    });
    //Button fügt Namen einer Liste hinzu die zuvor vom User eingegeben wurden
    buttonOutputFieldGiveNamesToList.addEventListener("click", function () {
        getNameFromInputAddToList();
    });
    //Button gibt einen zufälligen Namen aus der zuvor erstellten Liste aus
    buttonGetRandomNameFromList.addEventListener("click", function () {
        getRandomNameFromList();
    });

})();
