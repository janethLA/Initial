//La promesa recibe como parametro una funcion tipo flecha
let promesa = new Promise((resolver,rechazar) => {
    let expresion = true;
    if (expresion) 
       resolver('Resolvio correcto');
    else 
       rechazar('Se produjo un error');
});

//Puede recibir como parametros, dos funciones flecha uno para resolver y otro para rechazar
promesa.then(valor=> console.log(valor), error => console.log(error));

//O puede tener un then(resolver) y un catch(rechazar), donde cada uno recibe una funcion flecha
promesa
.then(valor=> console.log(valor))
.catch( error => console.log(error));


//OTRO EJEMPLO DE PROMESA CON SETIMEOUT
let miPromesa = new Promise((resolver) => {
    console.log('Inicio');
    setTimeout(()=> resolver('Saludos con promesa y timeout'),3000); //Este es otro proceso
    console.log('Fin');
});
miPromesa.then(valor=> console.log(valor));


//OTRO EJEMPLO DE PROMESA CON ASYNC
//async indica que una funcion regresa una promesa
//                       NO es necesario que reciba la funcion resolver como parametro
async function miPromesa1(){
    return 'Saludo con promesa y async';//esto es lo que hace la funcion resolver() implicitamente
}
miPromesa1().then(valor=> console.log(valor));


//OTRO EJEMPLO DE PROMESA CON ASYNC Y AWAIT
async function funcionConPromesaYAwait(){
    let miPromesa = new Promise(resolver =>{
        resolver('Promesa con await');
    });
    console.log(await miPromesa);
}
funcionConPromesaYAwait();


//OTRO EJEMPLO DE PROMESA CON ASYNC, AWAIT  Y SETIMEOUT
async function funcionConPromesaAwaitTimeout(){
    console.log('Inicio funcion');
    let miPromesa = new Promise (resolver =>{
        setTimeout(()=> resolver('Promesa con await y timeout'),3000);
    })

    console.log(await miPromesa);
    console.log('fin funcion');
}
funcionConPromesaAwaitTimeout();

//await se usa dentro de una funcion async