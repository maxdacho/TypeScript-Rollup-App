import { outputFieldKopfOderZahl } from "./domElements";

function kopfOderZahl(){
    let randomNumberKopfOderZahl : number = Math.round(Math.random());
    outputFieldKopfOderZahl.innerHTML = `${randomNumberKopfOderZahl}`;

}

export{kopfOderZahl};