function sumarEnCadena(frase){
    let comprobacion = new RegExp(/([0-9]+(\.[0-9]?)?)/,"g");
    let res = frase.match(comprobacion);
    let suma = 0;
    for (let num of res) {
        suma+=parseFloat(num);
    }
    return suma;
}

function dosCadenas(frase, frase2){
        let comprobacion = new RegExp(/([0-9])/,"g");
        let res = frase.match(comprobacion);
        let res2 = frase2.match(comprobacion);
        let suma1 = "";
        let suma2 = "";
        for (let num of res) {
            suma1+=num;
        }
        for (let num of res2) {
            suma2+=num;
        }
        resultado = suma1/suma2;
        try{
            if(!isFinite(resultado)){
                throw new Error("El resultado no puede ser infinito");
            } else{
                return resultado;
            }
        } catch(err){
            console.log(`${err.name} : ${err.message}`)
    } 
}

function sumarDosCadenas(frase, frase2){
    return sumarEnCadena(frase) + sumarEnCadena(frase2);
}



console.log(sumarEnCadena("El cadiz marca 5 y el betis B 38"));
console.log(dosCadenas("pepito34es super guay12", "viva el cadiz y el betis10"));
console.log(sumarDosCadenas("pepito34.5es super guay12", "viva el cadiz y el betis0"));