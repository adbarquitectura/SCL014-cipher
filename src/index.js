import {cipher,deCipher} from './cipher.js';


let textModific = document.getElementById("text-cipher");
//console.log(textModific);

let offsetText = document.getElementById("offsetText");
//console.log(offsetText);

let screenWelcome = document.getElementById("screenWelcome");
let screenCipher = document.getElementById("screenCipher");



function Ingresar (){
    let buttonInit = document.getElementById("ingresar");
    buttonInit.addEventListener("click", function(){
        screenWelcome.style.display = "none";
        screenCipher.style.display = "block";
    });
};
Ingresar();



function initial (){
    let buttonCipher = document.getElementById("btnCipher");
    buttonCipher.addEventListener("click", printCipher);
};
initial();

function initialSec (){
    let buttonDeCipher = document.getElementById("btnDecipher");
    buttonDeCipher.addEventListener("click", printDeCipher);
};
initialSec();

function printCipher (){
    let cipherImpre = cipher(textModific,offsetText);
    //console.log(cipherImpre);
    textModific.value = cipherImpre;
    //let screenPrintOne = document.getElementById("offsetBox-cipher").style="display: block;";
    //let ver = document.getElementById("text-return-cipher").innerHTML = "Su texto cifrado es " + cipherImpre;
};

function printDeCipher (){
    let deCipherImpre = deCipher(textModific,offsetText);
    textModific.value = deCipherImpre;
    //let screenPrintOne = document.getElementById("offsetBox-deCipher").style="display: block;";
    //let ver = document.getElementById("text-return-deCipher").innerHTML = "Su texto descifrado es " + deCipherImpre;
};

function deleteText (){
    let buttonDeleteText = document.getElementById("btn-delete-text");
    buttonDeleteText.addEventListener("click", function(){
        textModific.value = "";   
    });
};
deleteText();