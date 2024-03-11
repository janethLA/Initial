let a = 3 , b =2, c = "3";

//IGUALDAD
//== Se revisa el valor sin importar el tipo
let z = a == b; 
console.log(z);
z = a == c;
console.log(z);

// === Se revisa los valores pero tambien el tipo
 z = a === b;
console.log(z);
z = a === c;
console.log(z);


//DISTINTO A 
z = a != c; //No son diferentes
console.log(z);

z = a !== c; //Si son diferentes, tomando en cuenta el tipo de dato
console.log(z);

c=3;
//OPERADORES RELACIONALES
//MENOR QUE, MAYOR QUE
z = a < c; 
console.log(z);
z = a <= c; 
console.log(z);
z = a > c; 
console.log(z);
z = a >= c; 
console.log(z);


//EJERCICIOS
let x=8;
if (x % 2 === 0) {
    console.log("es un numero par");
} else {
    console.log("es un numero impar");
}
