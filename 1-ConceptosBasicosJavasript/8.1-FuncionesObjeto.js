//FUNCIONES COMO OBJETOS
//Las funciones tambien pueden ser descritas como objetos
//--> podemos saber los argumentos que tiene la funcion, se tiene que usar dentro de la funcion

function getParam(a,b) {
    console.log(arguments.length);
    return a+b;
}
console.log(getParam(4,5));


var miFuncion = getParam.toString();
console.log(miFuncion);

//Con estos dos ejemplos vemos que estas funciones se comportan como objetos