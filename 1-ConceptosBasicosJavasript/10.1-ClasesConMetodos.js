class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;  
        this.apellido = apellido;
    }

    get nombre(){ //no se puede llamar igual a la propiedad
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }
}

let persona1 = new Persona('Juan', 'Perez'); //Instamcia de clase u objeto
console.log(persona1.nombre); //acceddemos al metodo get nombre(no se utiliza los parentesis)
persona1.nombre = 'Juan Carlos';//utilizamos al metodo set nombre(no se utiliza los parentesis)
console.log(persona1.nombre); 
