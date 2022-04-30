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
    //Elemente für die Kopf oder Zahl Ausgabe
    let outputFieldKopfOderZahl = document.getElementById('outputKopfOderZahl');
    let buttonGetKopfOderZahl = document.getElementById('buttonGetKopfOderZahl');
    //Elemente für die Zufallsfarbe 
    let outputFieldRandomColorCode = document.getElementById('outputRandomColorCode');
    let outputFieldRandomColor = document.getElementById('outputRandomColor');
    let buttonGetRandomColor = document.getElementById('buttonGenerateRandomColor');

    //Funktion die Zufallszahl generiert
    function generateRandomNumber() {
        let randomNumber = Math.round(Math.random() * 6);
        if (randomNumber == 0) ;
        else {
            outputFieldRandomNumber.innerHTML = `${randomNumber}`;
        }
    }

    function kopfOderZahl() {
        let randomNumberKopfOderZahl = Math.round(Math.random());
        if (randomNumberKopfOderZahl == 0) {
            outputFieldKopfOderZahl.innerHTML = "Kopf";
        }
        else {
            outputFieldKopfOderZahl.innerHTML = "Zahl";
        }
    }

    let arrayNamesFromList = [];
    //Funktion die Namen aus der Eingabe in eine Liste speichert
    function getNameFromInputAddToList() {
        let divOutputFieldNames = document.createElement('div');
        if (arrayNamesFromList.length == 7) {
            return 0;
        }
        else {
            divOutputFieldNames.innerHTML = inputFieldGiveNames.value;
            outputFieldNamesFromUserEntry.appendChild(divOutputFieldNames);
            arrayNamesFromList.push(inputFieldGiveNames.value);
        }
    }
    //Funktion die einen zufälligen Namen aus der zuvor erstellen Liste auswählt
    function getRandomNameFromList() {
        let newArray = arrayNamesFromList.slice(0, -1);
        let randomNumberForNamesFromList = Math.round(Math.random() * newArray.length);
        outputFieldRandomNameFromList.innerHTML = `${arrayNamesFromList[randomNumberForNamesFromList]}`;
    }

    function generateRandomColor() {
        let randomNumberForRGBValue1 = Math.round(Math.random() * 255);
        let randomNumberForRGBValue2 = Math.round(Math.random() * 255);
        let randomNumberForRGBValue3 = Math.round(Math.random() * 255);
        let randomNumberForRGBAValue = Math.round(Math.random() * 100);
        let dividedRGBAValue = randomNumberForRGBAValue / 100;
        let numberForColors = [];
        numberForColors = [randomNumberForRGBValue1, randomNumberForRGBValue2, randomNumberForRGBValue3, dividedRGBAValue];
        outputFieldRandomColor.style.backgroundColor = `rgba(${numberForColors})`;
        outputFieldRandomColorCode.innerHTML = `${numberForColors}`;
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
    //Button generiert 0 oder 1 für die Kopf oder Zahl Funktionalität
    buttonGetKopfOderZahl.addEventListener("click", function () {
        kopfOderZahl();
    });
    //Button generiert Zufallsfarbe durch Funktionsaufruf
    buttonGetRandomColor.addEventListener("click", function () {
        generateRandomColor();
    });

})();
