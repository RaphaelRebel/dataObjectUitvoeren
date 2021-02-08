const uitvoer = document.getElementById("uitvoer");
let dataObject;


const uitvoeren = () => {
    //deze functie voert de data uit in de div met de ID uitvoer
    uitvoer.innerHTML = `<div>${dataObject[0].tijd} </div>`;
    uitvoer.innerHTML += `<div>${dataObject[1].tempBuiten} </div>`;
}

const starten = () => {
    // de data array in onze data Object stoppen
    dataObject = energieData;
    // data uitvoeren
    uitvoeren();
}



document.addEventListener("DOMContentLoaded", starten);