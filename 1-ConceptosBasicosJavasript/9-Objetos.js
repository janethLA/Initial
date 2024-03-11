//CREACION DEL Objeto persona --> Es la forma mas 
const persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad:19

}

//Acceder a un objeto
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona);

//AGREGAR METODOS A LOS OBJETOS
const persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad:19,
    nombreCompleto: function(){
        return this.nombre +' '+ this.apellido;
    },
    edadMasUno: function (a){
        return a+ this.edad;
    }
}
console.log(persona1.nombreCompleto());
console.log(persona1.edadMasUno(1));

//CREACION DEL OBJETO CON NEW
let persona2 =new Object();// new--> reserva un espacio en memoria para el objeto
persona2.nombre='Laura';
persona2.direccion= 'Av. America';
persona2.celular=7456;
console.log(persona2.nombre);


//ACCEDER AL OBJETO (otra forma)
console.log(persona['nombre']);//ponemos el nombre de la propiedad entre comillas a la cual tenemos que acceder del objeto
//recorrer todas las propiedades con un for in
for(nombrePropiedad in persona){
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad]);
}


//AGREGAR NUEVAS PROPIEDADES AL OBJETO
persona.tel = '4352353'; 
persona.tel1 = '4352353'; 
console.log(persona);

//ELIMINAR PROPIEDADES DEL OBJETO
delete persona.tel1;
console.log(persona);//Asi en el navegador no se ve

//IMPRIMIR EL OBJETO EN UN NAVEGADOR WEB
//-->Concatenamos cada valor de cada propiedad
console.log(persona.nombre+', '+persona.apellido);
//-->for in
for(prop in persona){
    console.log(persona[prop]);
}
//con Object
let personaArray = Object.values(persona);
console.log(personaArray);
//Con JSON
let personaString = JSON.stringify(persona);
console.log(personaString);