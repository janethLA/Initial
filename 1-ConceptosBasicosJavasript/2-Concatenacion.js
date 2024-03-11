//Concatenacion de cadenas
var nombre='Juan';
var apellido='Perez';
var nombreCompleto=nombre+' '+apellido;
console.log(nombreCompleto);
nombreCompleto // tambien se pone asi con quokka


//las expresiones de java script se evaluan e izquierda a derecha
// es decir nombre es string entonces 219 lo toma como cadena tambien
var x = nombre + 219;
console.log(x);

//toma prioridad el parentesis por eso lo suma
x = nombre + (2+1+9);
console.log(x);

//Se suma primero los numeros y se concatena la cadena
x = 2+1+9 +nombre;
console.log(x);


