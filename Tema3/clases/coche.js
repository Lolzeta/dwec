class Coche{
    constructor(matricula, modelo, marca, edad){
        this.matricula = matricula;
        this.modelo = modelo;
        this.marca = marca;
        this.edad = edad;
    }
    mostrarDatosCoche(){
        return `${this.matricula} ${this.modelo} ${this.marca} ${this.edad}`;
     }

     static esAntiguo(edad){
         return edad>30;
     }

     get matricula(){
         return this._matricula;
     }

     get modelo(){
        return this._modelo;
    }

    get marca(){
        return this._marca;
    }

    get edad(){
        return this._edad;
    }

    set matricula(matricula){
        this._matricula = matricula;
    }

    set modelo(modelo){
        this._modelo = modelo;
    }

    set marca(marca){
        this._marca = marca;
    }

    set edad(edad){
        this._edad = edad;
    }

    toString(){
        return `Matricula: ${this.matricula} Modelo: ${this.modelo} Marca: ${this.marca} Edad: ${this.edad}`;
    }
}

class CocheElectrico extends Coche{
    constructor(matricula, modelo, marca, edad, baterias){
        super(matricula, modelo, marca, edad);
        this.baterias = baterias;
    }
}

let coche = new Coche("12341-EX", "Romeo", "Fiat", 3);
console.log(coche.mostrarDatosCoche());
coche.matricula = "Brum";
coche.modelo = "Brum";
coche.marca = "Brumm";
console.log(coche.mostrarDatosCoche());
coche["matricula"]="12341-EX";
coche["modelo"] = "Romeo";
coche["marca"] = "Fiat";
console.log(coche.mostrarDatosCoche());
for (const prop in coche) {
    console.log(`${prop}:${coche[prop]}`);
}
console.log(Coche.esAntiguo(32));
console.log(coche);
console.log(coche.toString());
console.log(coche.toString);
console.log(""+coche);
console.log(" " + coche.toString());
console.log(" " + coche.toString);