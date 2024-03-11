//El modo estricto es por buenas practicas
//Se utiliza para que las variables que se utilizen si o si tengan que declararse 
"use strict"  //Esto aplica para todo el archivo, tambien se puede aplicar solo a un funcion
let x= 10;
console.log(x);
// y=9; ya NO se puede utilizar asi con el modo strict

miFuncion();
function miFuncion(){
    // "use strict" --> esto solo se aplica a la funcion
    let z=0;
}
