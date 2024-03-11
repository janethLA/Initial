//Un atributo estatico no puede ser llamado con la palabra reservada this
//ya que this lo usa el objeto 
class Persona{

    static contadorObjetoPersona = 0;//Atributo estatico

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
//Los atributos estaticos pueden ser llamados tambien desde las clases hija
console.log(Persona.contadorObjetoPersona);
console.log(Empleado.contadorObjetoPersona);

