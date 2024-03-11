//Declaracion de la funcion
function miFuncion(a, b) {
    console.log("Suma: "+ (a+b));
}

//Llamando a la funcion--> Podemos mandar a llamar en cualquier parte del codigo, debido al Hoisting que permite eso
miFuncion(3,4);

//FUNCIONES GETTER
function miFuncion1(a,b) {
    console.log(arguments.length);
    return a+b;
    
}
let resultado = miFuncion1(5,3);
console.log(miFuncion1(2,3));
console.log(resultado);


//FUNCIONES DE TIPO EXPRESION O ANONIMAS--> no se pone el nombre de la funcion
//Declaracion
let x = function (a, b){ return a+b};
//Utilizacion
let result = x(3,4);
console.log(result);


//FUNCIONES SELF-INVOKING
//Funciones que se llaman a si mismo y se ejecutan, pero ya no puede ser reutilizado porque no tiene nombre ni se le esta asignando a otra variable
(function () {
    console.log("funcion que se llama a si mismo");
})();//Con el ultimo parentesis se llama 
(function (a,b) {
    console.log("Suma: "+ (a+b));
})(5,6);

