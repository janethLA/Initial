//CONSTRUCTOR--> funcion especial, se recomienda que comienze con mayuscula
//funcion constructor de objetos de tipo persona
//                lista de parametros
function Persona(nombre, apellido, edad1){
    this.nombre =nombre;
    this.apellido = apellido;
    this.edad = edad1;
}

//Ahora podemos crear diferentes objetos de persona
let padre = new Persona('Juan', 'Perez', 22);
console.log(padre);

let hijo = new Persona('Laura','Perez',12);
console.log(hijo);

//solo cambia el nombre del objeto padre
padre.nombre = 'Carlos';
console.log(padre);


//AGREGAR FUNCIONES AL CONSTRUCTOR
function Persona1(nombre, apellido, edad1){
    this.nombre =nombre;
    this.apellido = apellido;
    this.edad = edad1;
    this.nombreCompleto = function (){
        return this.nombre+' '+this.apellido;
    }
}
let padre1 = new Persona1('Juan', 'Perez', 22);
console.log(padre1);
console.log(padre1.nombreCompleto());


//Sino queremos agregar mas propiedades dentro del constructor , podemos usar:
//PROTOTYPE
Persona1.prototype.tel = '445345'; //creamos mas propiedades para todos los objetos de tipo persona
