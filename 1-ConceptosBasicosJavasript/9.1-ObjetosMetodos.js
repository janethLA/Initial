//METODOS GET
let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad:19,
    //get + nombre de la funcion :
    get nombreCompleto(){
        return this.nombre +' '+ this.apellido;
    },
    edadMasUno: function (a){
        return a+ this.edad;
    }
}
console.log(persona.nombreCompleto); //Como es un metodo get, ya no hay necesidad de poner parentesis
console.log(persona);

//METODOS SET
let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad:19,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();
    },
    //SET para cambiar o modificar las propiedades
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto(){
        return this.nombre +' '+ this.apellido;
    },
}
console.log(persona1.lang); //get lang()
persona1.lang = 'en' ;//set lang(lang)
console.log(persona1.lang); 