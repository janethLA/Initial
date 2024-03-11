//Break--> rompe el ciclo
//Encuentra el primer numero par en el ciclo y se rompe el ciclo con la palabra break
for (let contador = 1; contador <= 10; contador++) {
    if (contador %2 == 0) {
        console.log(contador);
        break;
    }   
}

//Continue-->Indica que se va a ir a la siguiente iteracion
//Si es un numero impar , va a  la siguiente iteracion sin importar lo que haya debajo
//y solo los pares son imprimidos
for (let contador = 0; contador <= 10; contador++) {
    if (contador %2 != 0) {
        continue;//ir a la siguiente iteracion
    }  
    console.log(contador);
}

//Labels--> No son muy utilizadas , solo por cultura general
inicio: //Etiqueta
for (let contador = 0; contador <= 10; contador++) {
    if (contador %2 != 0) {
        continue inicio;//ir a la etiqueta inicio
    }  
    console.log(contador);
}

inicio2: //Etiqueta
for (let contador = 0; contador <= 10; contador++) {
    if (contador %2 != 0) {
        break inicio2;//romper el ciclo de la etiqueta inicio2
    }  
    console.log(contador);
}