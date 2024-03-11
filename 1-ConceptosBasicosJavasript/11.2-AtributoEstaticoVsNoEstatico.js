class Persona{

    static contadorObjetoPersona = 0;//Atributo de nuestra clase
    email = 'email@gmail.com'; //Atributos de nuestros objetos
    constructor(nombre, apellido){
        this._nombre = nombre;  
        this._apellido = apellido;
    }
}
class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre,apellido);
        this._departamento = departamento;
    }
}
let persona1=new Persona('Juan', 'Perez');
let empleado1=new Empleado('Erick', 'Lozada','Sistemas');
//La clase accede al atributo estatico 
console.log(Persona.contadorObjetoPersona);
console.log(Empleado.contadorObjetoPersona);
//El objeto accede al atributo no estatico
console.log(empleado1.email);
console.log(persona1.email);

