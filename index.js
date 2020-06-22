import cipher from './cipher.js';
 

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
}
Ingresar();

function initial (){
    let buttonCipher = document.getElementById("btnCipher");
    buttonCipher.addEventListener("click", printCipher);
}
initial();

function initialSec (){
    let buttonDeCipher = document.getElementById("btnDecipher");
    buttonDeCipher.addEventListener("click", printDeCipher);
}
initialSec();

function printCipher (){
    let cipherImpre = cipher.encode(textModific.value , parseInt(offsetText.value));
    textModific.value = cipherImpre;
}

function printDeCipher (){
    let deCipherImpre =cipher.decode(textModific.value , parseInt(offsetText.value));
    textModific.value = deCipherImpre;        
}

function deleteText (){
    let buttonDeleteText = document.getElementById("btn-delete-text");
    buttonDeleteText.addEventListener("click", function(){
        textModific.value = "";   
    });
}
deleteText();

function copyText (){
    let buttonCopyText = document.getElementById("copy-text");
    buttonCopyText.addEventListener("click", copy);
}
copyText();


function copy (){
    let copyText = textModific;
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}
