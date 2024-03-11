//Parametros= Se le conoce a la lista de valores que va a recibir una funcion
//            (a+b)
//Argumentos= Son los valores que pasamos cuando llamamos a la funcion en sus parametros
//            (3,4)

let sumar = function (a,b) {
    console.log(arguments[0]);
    console.log(arguments[1]);
    return a+b;
}
let resultado = sumar(3,4);
console.log(resultado);

//Podriamos poner valores por default a los parametros
let sumar1 = function (a=9,b=8) {
    console.log(arguments[0]);
    console.log(arguments[1]);
    return a+b;
}
resultado = sumar1();
console.log(resultado);

resultado = sumar1(3,5);
console.log(resultado);

//La cantidad de parametros no necesariamente conciden con la cantidad de argumentos
let sumar2 = function (a=9,b=8) {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    return a+b+arguments[2];
}
resultado = sumar2(3,4,5);
console.log(resultado);

//Como arguments es un objeto de arreglos, podemos sacar su tmananio con length