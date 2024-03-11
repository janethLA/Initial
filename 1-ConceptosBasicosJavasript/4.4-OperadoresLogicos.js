//OPERADOR AND (&&)
let a = 10;
let valMin= 0, valMax =10;
if (a>=valMin && a<= valMax) {
    console.log("Dentro del rango");
} else {
    console.log("Fuera del rango");
}

//OPERADOR OR (||)
let vacacion = true, diaDescanso = false;
if (vacacion || diaDescanso) {
    console.log("Puede");
} else {
    console.log("No puede");
}