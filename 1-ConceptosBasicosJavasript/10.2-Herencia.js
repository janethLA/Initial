class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;  
        this._apellido = apellido;
    }

    get nombre(){ //no se puede llamar igual a la propiedad
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    nombreCompleto(){ //No es necesario poner la palabra reservada function, cuando trabajamos con clases
        return this._nombre+ ' ' +this._apellido;
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre,apellido);
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }
}

let empleado1=new Empleado('Erick', 'Lozada','Sistemas');
console.log(empleado1);
console.log(empleado1.nombre);
console.log(empleado1.nombreCompleto());

