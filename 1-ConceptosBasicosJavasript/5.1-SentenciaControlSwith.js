//El Swith hace una comparacion estricta, es decir compara tipos de datos y el dato
let numero = 1;

let numeroTexto = 'Valor desconocido';

switch (numero) {
    case 1:
        numeroTexto = "Numero uno";
        break;
    case 2:
        numeroTexto = "Numero dos";
        break;
    case 3:
        numeroTexto = "Numero tres";
        break;
    case 4:
        numeroTexto = "Numero cuatro";
        break;

    default:
        numeroTexto = "Caso no encontrado";
        break;
}
console.log(numeroTexto);

//Ejemplo
let mes = 1;

let estacion = 'Valor desconocido';

switch (mes) {
    case 1:  case 2:  case 3:
        estacion = "Verano";
        break;
    case 4: case 5: case 6:
        estacion = "Invierno";
        break;
    case 7: case 8: case 9:
        estacion = "Otono";
        break;
    case 10: case 11: case 12:
        estacion = "Primavera";
        break;

    default:
        estacion = "Valor incorrecto";
        break;
}
console.log(estacion);