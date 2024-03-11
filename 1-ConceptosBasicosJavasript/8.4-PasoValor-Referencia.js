//PASO POR VALOR
//es cuando utilizamos tipos que no son objetos, es decir tipo numerico, boolenaos
//Tipo primitivo
//-->En el paso por valor la variable x no se modifica solo paso una copia a la variable a
let x = 10;

function cambiarValor(a) {
    a=20;
    return;//No es necesario , de manera automatica se agrega
}
cambiarValor(x);
console.log(x);


//PASO POR REFERENCIA 
//Creamos un objeto y el objeto tiene propiedades y metodos 
//cuando manejamos objetos con propiedades el paso de valor es por referencia
//La variable persona almacena una referencia del objeto y por ende podemos acceder a los valores y modificarlos
//--> en el paso por referencia la variable persona cambia de valor puede ser modificada
const persona = {
    nombre: 'Juan',
    apellido: 'Perez'
}

function cambiarValorObjeto(p1) {
    p1.nombre = 'Carlos';
}
cambiarValorObjeto(persona);
console.log(persona);