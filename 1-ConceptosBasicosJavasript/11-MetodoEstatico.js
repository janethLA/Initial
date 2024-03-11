//Los metodos estaticos no pueden ser llamados por los objetos
//Los metodos estaticos solo pueden ser llamados por las clases
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
    nombreCompleto(){ 
        return this._nombre+ ' ' +this._apellido;
    }
    //METODOS ESTATICOS
    static saludar(){
        return 'saludo desde metodo estatico';
    }
    static saludar1(persona){
        return persona._nombre;
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
let persona1=new Persona('Juan', 'Perez');
let empleado1=new Empleado('Erick', 'Lozada','Sistemas');
//console.log(empleado1.saludar());   el objeto no puede llamar al metodo estatico
//Asi que llamamos desde la clase
console.log(Persona.saludar());
console.log(Persona.saludar1(persona1));
console.log(Persona.saludar1(empleado1));
console.log(Empleado.saludar1(empleado1));


