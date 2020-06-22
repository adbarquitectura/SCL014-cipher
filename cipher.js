const cipher = { 
  encode: (texto, desplaza) => {
    let textoCifra = texto;
    let textCap = textoCifra.toUpperCase();
    let arrayBasic=Array.from(textCap);
    let length = arrayBasic.length;
    let encodeResult = ""; 
    for(let i=0; i<length; i++){
        let posicionArray= arrayBasic[i];
        //console.log(posicionArray);
        let valueTextPosition=posicionArray.charCodeAt(0);
        //console.log(valueTextPosition);
        let newValueTextPosition= ((valueTextPosition-65+desplaza)%26+65);
        //console.log(newValueTextPosition);
        let newV= String.fromCharCode(newValueTextPosition);
        //console.log(newV);
        encodeResult = encodeResult + newV; 
        //console.log(encodeResult);
      }
    return encodeResult;
  },

  decode: (texto, desplaza) => {
    let textoCifra = texto;
    let textCap = textoCifra.toUpperCase();
    let arrayBasic=Array.from(textCap);
    let length = arrayBasic.length;
    let encodeResultSec = ""; 
    for(let i=0; i<length; i++){
        let posicionArray= arrayBasic[i];
        let valueTextPosition=posicionArray.charCodeAt(0);
        let newValueTextPositionSec= valueTextPosition-64;
        let originalValueTextPosition= (90-((26-newValueTextPositionSec+desplaza)%26));
        let newVSec= String.fromCharCode(originalValueTextPosition);
        encodeResultSec = encodeResultSec + newVSec; 
        
      }
    return encodeResultSec;
  }
  
};

export default cipher; 