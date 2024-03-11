class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;  
        this._apellido = apellido;
    }

    get nombre(){ 
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

//la palabra super hereda los atributos y metodos de la clase padre
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
    nombreCompleto(){
        return super.nombreCompleto()+ ' ' +this._departamento;
    }
}

//INSTANCEOF--> Para saber de que instancia es el ebjeto
function mostrar(tipo){
   
    if (tipo instanceof Empleado) {
        console.log('Es un objeto de tipo empleado '+tipo._nombre);  
    }
    else if (tipo instanceof Persona) {
        console.log('Es un objeto de tipo persona');  
    }
    
}

let empleado1=new Empleado('Erick', 'Lozada','Sistemas');
let empleado2=new Empleado('Sandra', 'Lozada','Sistemas');
let persona1 = new Persona('Juan', 'Perez'); 
mostrar(persona1);
mostrar(empleado1);
mostrar(empleado2);
