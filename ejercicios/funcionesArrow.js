let comparar = (x,y)  => (x<y)?-1:(x>y)?1:0;
let arrayto = [9,10,5,3,4,1,0,-1,19];
console.log(arrayto.sort(comparar));
let arrayto2 = [12,13,16,19,5,4,3];
let arrayto3 = [12,13,16,19,5,4,3];



function copiarSinRepeticiones(array1,array2){
    let res = array1.concat(array2);
    res.sort(comparar);
    let aux = [];
    for (let i = 0; i < res.length; i++) {
        if(res[i]!==res[i+1]&&res[i]!==res[i-1]){
            aux.push(res[i]);
        }
    }
    return aux;
}

console.log(copiarSinRepeticiones(arrayto,arrayto2));

function invertirNumeros(array, principio, fin){
    let arrayAux = array.slice(principio,fin);
    arrayAux.reverse();
    for (let i = 0; i < array.length; i++) {
        array.fill(arrayAux[i],principio+i,fin);
    }
    return array;
}

console.log(invertirNumeros(arrayto3,3,7));