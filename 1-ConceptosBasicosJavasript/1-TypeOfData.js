//control+shift+p-->quokka
//Numeric data type
var number = 100;
console.log(number);

//String
var name = "Sebastian";
console.log(name);

//Object
var object={
    name: "Juan",
    lastname:"Perez",
    telephone:74676765
}
console.log(object);
console.log(typeof object);

//boolean
var flag=true;
console.log(flag);

//function -->en java script una funcion es tambien un tipo de datp
function myfuncion(){}
console.log(myfuncion);

//Symbol--> se utiliza para crear un valor unico de una variable
var simbolo = Symbol("mi simbolo");
console.log(simbolo);

//Tipo CLASE es una funcion
class Persona{
    constructor (nombre, apellido){
        this.nombre=nombre;
        this.apellido=apellido;
    }
}
console.log(typeof Persona);

//Tipo undefined -->cuando no se inicializa la variable
var x;
var z= undefined;
console.log(x);
console.log(z);

//NULL--> ausencia de valor--> es un tipo de dato Object
var y=null;
console.log(y);
console.log(typeof y);


//Arreglos(de strings) --> son de tipo Object
var autos = ['BMW', 'Audi', 'Volvo'];
console.log(autos);

//Vacios
var e = '';
console.log(e);

// typeof
console.log(typeof object);
console.log(typeof name);
console.log(typeof number);
console.log(typeof flag);
console.log(typeof myfuncion);
console.log(typeof simbolo);
console.log(typeof x);
console.log(typeof y);
console.log(typeof autos);
console.log(typeof e);