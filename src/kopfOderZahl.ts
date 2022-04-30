import { outputFieldKopfOderZahl } from "./domElements";

function kopfOderZahl(){
    let randomNumberKopfOderZahl : number = Math.round(Math.random());
    if(randomNumberKopfOderZahl==0){
        outputFieldKopfOderZahl.innerHTML = "Kopf";
    }
    else{
    outputFieldKopfOderZahl.innerHTML = "Zahl";
    }

}

export{kopfOderZahl};