let cars = new Array('BMW', 'Mercedes Benz','Volvo');//Declaracion de un arreglo ,poco habitual

//Es mejor declarar un arreglo con const , ya que la referencia no va a cambiar aunque si el contenido
//Se crea un espacio en memoria , se le asigna una referencia y a esa referencia en memoria es que se le asigna a la variable autos
const autos = ['BMW', 'Mercedes Benz','Volvo'];
console.log(autos);


//ACCEDER A LOS ELEMENTOS DEL ARREGLO
//--> Accedemos al elemento en el indice 0 del array Autos
autos[0]; 
console.log(autos[0]);
//-->Acceder a todos los elementos del array
for (let i = 0; i < autos.length; i++) {
    console.log(autos[i]);
    
}
//--> recorrer los elementos del array
for (let auto of autos) {
    console.log(auto);
}


//MODIFICAR 
autos[1] = 'MercedesBENZ';
console.log(autos[1]);

//AGREGAR
//--> push, se agrega un elemento al final del arreglo
autos.push('Audi');
console.log(autos);

autos[autos.length] = 'Cadillac';
console.log(autos);
//Tambien podemos agregar un valor que no sea al final del arreglo, no es recomendable
autos[6] = 'Porche';
console.log(autos);

//COMO SABER SI ES UN ARREGLO
//Con typeof nos dice que es un Object
console.log(typeof autos);
// La clase Array no dice si autos es un array
console.log(Array.isArray(autos));
console.log(autos instanceof Array);