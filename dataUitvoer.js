const uitvoer = document.getElementById("uitvoer");
let dataObject;

const maakDatum = (num) => {
    // zet de string van de JS datum om in een betere vorm
    let datum = new Date(num);

    let dagWeek  = datum.getDay();
    let dagMaand = datum.getDate();
    let maand    = datum.getMonth();
    let jaar     = datum.getFullYear();
    let uren     = datum.getHours();
    let minuten  = datum.getMinutes();

    return `${dagWeek} </br>
    ${dagMaand} ${maand} ${jaar} ${uren}:${minuten}`;
}

const uitvoeren = () => {
    //deze functie voert de data uit in de div met de ID uitvoer
    let html = "";
    dataObject.forEach( obj => {
        html += `<div class="rij">`;
        html += `<div>${maakDatum(obj.tijd)}</div>`;
        html += `<div>${obj.tempBuiten}</div>`;
        html += "</div>";
    });
    uitvoer.innerHTML = html
}

const starten = () => {
    // de data array in onze data Object stoppen
    dataObject = energieData;
    // data uitvoeren
    uitvoeren();
}



document.addEventListener("DOMContentLoaded", starten);