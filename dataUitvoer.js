const uitvoer = document.getElementById("uitvoer");
let dataObject;

const geefDagWeek = (num) => {
    switch (num) {
        case 0: return "Zondag"; break;
        case 1: return "Maandag"; break;
        case 2: return "Dinsdag"; break;
        case 3: return "Woensdag"; break;
        case 4: return "Donderdag"; break;
        case 5: return "Vrijdag"; break;
        case 6: return "Zaterdag"; break;
        default: return num;
    }
}

const maandNaam = (num) => {
    switch (num) {
        case 0: return "januari"; break;
        case 1: return "februari"; break;
        case 2: return "maart"; break;
        case 3: return "april"; break;
        case 4: return "mei"; break;
        case 5: return "juni"; break;
        case 6: return "juli"; break;
        case 7: return "augustus"; break;
        case 8: return "september"; break;
        case 9: return "oktober"; break;
        case 10: return "november"; break;
        case 11: return "december"; break;
        default: return num;
    }
}

const maakDatum = (num) => {
    // zet de string van de JS datum om in een betere vorm
    let datum = new Date(num);

    let dagWeek  = datum.getDay();
    let dagMaand = datum.getDate();
    let maand    = datum.getMonth();
    let jaar     = datum.getFullYear();
    let uren     = datum.getHours();
    let minuten  = datum.getMinutes();

    return `${geefDagWeek(dagWeek)} </br>
    ${dagMaand} ${maandNaam(maand)} ${jaar} ${uren}:${minuten}`;
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