function contar(frase, palabra){
     let palabrina = new RegExp("\\s"+ palabra + "\\s\\W","g");
     let res = frase.match(palabrina);
     if(res !==null){
         return `Se han contado ${res.length} veces la palabra.`;
     }
}

function esHexadecimal(palabra){
    let resultado = false;
    let palabrina = new RegExp(/^#(([0-9A-Z]{3})|([0-9A-Z]{6}))$/);
    if(palabrina.test(palabra)){
        resultado = true;
    }
    return resultado;
}

console.log(contar("Estoy cansado de esta clase nade cliente, denada de,", "de"));
console.log(esHexadecimal("#012345"));