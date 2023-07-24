//import { capitalizar } from "./8.3-aux.js"
import * as capitalizador from "./8.3-aux.js"

const textinside = capitalizador.capitalizar(`Texto`);
const text = `<h1>${textinside}</h1>`;

function displayText(){
    document.getElementById('texto').innerHTML = text
}

document.getElementById('showText').addEventListener('click', displayText)
