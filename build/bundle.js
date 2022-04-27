(function () {
    'use strict';

    // Elemente zur Ausgabe einer Zufallszahl
    let outputFieldRandomNumber = document.getElementById('outputRandomNumber');
    let buttonGenerateRandomNumber = document.getElementById('generateRandomNumber');

    //Funktion die Zufallszahl generiert
    function generateRandomNumber() {
        let zufallsZahl = Math.round(Math.random() * 10);
        outputFieldRandomNumber.innerHTML = `${zufallsZahl}`;
    }

    //THIS IS THE ENTRY FILE - WRITE YOUR MAIN LOGIC HERE!
    //Button generiert Zufallszahl durch Funktionsaufruf
    buttonGenerateRandomNumber.addEventListener("click", function () {
        generateRandomNumber();
    });

})();
