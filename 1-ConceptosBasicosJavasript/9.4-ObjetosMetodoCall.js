//Tiene una funcion
let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(){
        return this.nombre+' '+this.apellido;
    }
}

//No tiene una funcion , se utiliza el metodo call para persona2 y reutiliza la funcion nombreCompleto del objeto persona1
let persona2 = {
    nombre: 'Carlos',
    apellido: 'Lara',
}
//Uso de call --tienen los mismos atributos
console.log(persona1.nombreCompleto.call(persona2));
//Esta definido en el objeto persona1 pero con los datos de persona2


//PASO DE ARGUMENTOS EN EL METODO CALL
let persona3 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(titulo, tel){
        return  titulo+' '+this.nombre+' '+this.apellido+' '+tel;
    }
}
//                                       Objeto    Arg1   Arg2
console.log(persona3.nombreCompleto.call(persona2, 'Ing.','34556'));