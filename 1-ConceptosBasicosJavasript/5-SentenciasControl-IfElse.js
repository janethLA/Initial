// IF - ELSE

let condicion = true;

if (condicion) {
    console.log("la condicion en verdadera");
} else {
    console.log("la condicion en falsa");
}

//Ejemplo 1

let numero = 1;

if (numero === 1) {
   console.log("Numero uno"); 
} else if(numero ==2){
    console.log("Numero dos"); 
} else if(numero ==3){
    console.log("Numero tres"); 
} else if(numero ==4){
    console.log("Numero cuatro"); 
} else{
    console.log("Numero desconocido"); 
}

//Ejemplo 2
let mes=1;
let estacion;

if (mes == 1 || mes == 2 || mes == 3) {
    estacion = "verano";
} else if(mes == 4 || mes == 5 || mes == 6) {
    estacion = "invierno";
} else if (mes == 7 || mes == 8 || mes == 9) {
    estacion = "otono";
} else if (mes == 10 || mes == 11 || mes == 12) {
    estacion = "privamera";
} else{
   estacion = "Valor incorrecto";
}

console.log(estacion);