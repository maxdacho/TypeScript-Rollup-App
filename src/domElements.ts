// Elemente zur Ausgabe einer Zufallszahl
let outputFieldRandomNumber = document.getElementById('outputRandomNumber') as HTMLElement;
let buttonGenerateRandomNumber = document.getElementById('buttonGenerateRandomNumber') as HTMLButtonElement;

//Elemente zur Erstellung einer Liste mit Namen nach User Eingabe
let inputFieldGiveNames = document.getElementById('addName') as HTMLInputElement;
let outputFieldNamesFromUserEntry = document.getElementById('outputNamesFromList') as HTMLElement;
let buttonOutputFieldGiveNamesToList = document.getElementById('buttonPutNameToList') as HTMLButtonElement;

//Elemente zur Ausgabe eines zufälligen Namens aus der zuvor erstellten Liste
let outputFieldRandomNameFromList = document.getElementById('outputRandomNameFromList') as HTMLElement;
let buttonGetRandomNameFromList = document.getElementById('buttonGetRandomNameFromList') as HTMLButtonElement;


export{outputFieldRandomNumber, buttonGenerateRandomNumber, inputFieldGiveNames, outputFieldNamesFromUserEntry, buttonOutputFieldGiveNamesToList, outputFieldRandomNameFromList, buttonGetRandomNameFromList};
