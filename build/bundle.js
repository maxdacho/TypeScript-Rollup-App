(function () {
    'use strict';

    // Elemente zur Ausgabe einer Zufallszahl
    let outputFieldRandomNumber = document.getElementById('outputRandomNumber');
    let buttonGenerateRandomNumber = document.getElementById('generateRandomNumber');
    //Elemente zur Erstellung einer Liste mit Namen nach User Eingabe
    let inputFieldGiveNames = document.getElementById('addName');
    let outputFieldNamesFromUserEntry = document.getElementById('outputNamesFromList');
    let buttonOutputFieldGiveNamesToList = document.getElementById('buttonPutNameToList');

    //Funktion die Zufallszahl generiert
    function generateRandomNumber() {
        let zufallsZahl = Math.round(Math.random() * 10);
        outputFieldRandomNumber.innerHTML = `${zufallsZahl}`;
    }

    //Funktion die Namen aus der Eingabe in eine Liste speichert
    function getNameFromInputAddToList() {
        let divOutputFieldNames = document.createElement('div');
        divOutputFieldNames.innerHTML = inputFieldGiveNames.value;
        outputFieldNamesFromUserEntry.appendChild(divOutputFieldNames);
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

})();
