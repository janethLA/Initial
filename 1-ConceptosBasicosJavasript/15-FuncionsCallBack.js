function imprimir(mensaje){
    console.log(mensaje);
}
                // pasamos la funcion como parametro
function sumar(op1,op2,funcionCallBack){
    let result = op1+op2;
    funcionCallBack(`Resultado: ${result}`);
}
//        le mandamos la funcion imprimir sin parentesis
sumar(7,8,imprimir);



//Llamadas asincronas con uso de setTimeout
function miFuncionCallBack() {
    console.log('saludo asincrono despues de 3 seg.');
}

//SET TIMEOUT
//miFuncionCallBack --> es una funcion pero cuando pasamos como referencia en el parametro, no necesita los parentesis
//El primer parametro es la funcion, y el segundo es el tiempo en milisegundos
setTimeout(miFuncionCallBack,3000); //despues de 3 segundos se ejecuta la funcion

//otra forma
setTimeout(function (){  console.log('saludo asincrono 2');},6000);

//otra forma con funcion flecha
setTimeout( () => console.log('saludo asincrono 3'),5000);


//SET INTERVAL --> Manda a llamar cada cierto tiempo a la funcion 
let reloj =()=>{
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}

setInterval(reloj,5000); //cada 1 segundo