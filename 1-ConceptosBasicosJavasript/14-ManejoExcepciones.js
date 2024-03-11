"use strict"
//Atrapamos el erro de no definir la variable con el catch
try {
    x = 3;
} catch (error) {
    console.log(error);
}
//El finally es opcional 
finally{
    console.log('La ultima');
}


//No hay error, asi que sigue su ejecucion
try {
    let x = 3;
} catch (error) {
    console.log(error);
}


//LANZAMOS EXCEPCIONES A PROPOSITO CON TRHOW
try {
    let x = 3;
    throw 'Error a proposito'; 
} catch (error) {
    console.log(error);
}
finally{
    console.log('La ultima');
}

//Algunas excepciones que podriamos lanzar
let numero = '';
try {
    if (isNaN(numero)) 
        throw 'No es un numero';
    if(numero === '')
        throw 'Cadena vacia';

} catch (error) {
    console.log(error);
}
finally{
    console.log('La ultima');
}