//Animationen
document.getElementById("appArea").classList.add('isLoaded');
document.getElementById("headline").classList.add('isLoaded');
document.getElementById("appArea2").classList.add('isLoaded2');


let buttonCube = document.getElementById("buttonGenerateRandomNumber");

buttonCube.addEventListener("click", function () {
    let cubeAnimation = document.getElementById("wuerfel");
    cubeAnimation.style.rotate = "720deg";
    cubeAnimation.style.transition = ("all 2s");
});

