//CLASE es una plantilla, posee atributos y metodos
//NO es posible crear objetos antes de declarar la clase
//No se aplica el concepto de hoisting
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;  //Se crea un nueva propiedad o atributo
        this.apellido = apellido;
    }
}

let persona1 = new Persona('Juan', 'Perez'); //Instamcia de clase u objeto
console.log(persona1);
let persona2 = new Persona('Carlos', 'Molina');
console.log(persona2);