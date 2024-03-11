//Es importante para hacer comparaciones convertir a numero
let miNumero="10";

console.log(typeof miNumero);

let edad = Number(miNumero);
console.log(typeof edad);

if (edad>=18) {
    console.log("Puede votar");
} else {
    console.log("No puede votar");
}

//Pero no cualquier String puede ser convertido a numero
let miNumero1="10x";

console.log(typeof miNumero1);

let edad1 = Number(miNumero1);
console.log(typeof edad1);
console.log( edad1); //NaN --> Not A Number

if (isNaN(edad1)) { //Preguntamos si no es un numero 
    console.log("No es un numero");
} else {//Si es un numero recien hacemos la operacion
    if (edad>=18) {
        console.log("Puede votar");
    } else {
        console.log("No puede votar");
    }
}

