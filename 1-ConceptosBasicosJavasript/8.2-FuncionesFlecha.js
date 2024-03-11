//A la variable sumarFuncionTipoFlecha se le asigna la referencia y una vez que se le asigna la referencia usualmente ya no se cambia por eso el uso de : cons 
//let en cualquier momento se puede cambiar
//Se parece a la funcion de tipo expresion
//En funciones flecha ya no se utiliza la palabra reservada function, directamente se pone los parametros de la funcion
//Ya no se utiliza las llaves, sino ponemos la flecha que indica que despues es el cuerpo de la funcion
//Ya no se utiliza el return
const sumarFuncionTipoFlecha = (a,b) => a+b;
let result = sumarFuncionTipoFlecha(3,5);
console.log(result);


//-->El mismo ejemplo como funcion de tipo expresion
let x = function (a, b){ return a+b};
result = x(3,5);
console.log(result);

//OTRO EJEMPLO
resultado();//Por hoisting podemos llamar a la funcion antes de inicializarla
function resultado(){
    console.log('Saludo desde la funcion');
}

let resultado1 = function (){
    console.log('Saludo desde la funcion expresion');
}
resultado1(); //NO podemos llamar a la funcion antes de inicializarla

//FUNCION FLECHA
const resultado2 = ()=>{ //Usamos const debido a que no va a cambiar de referencia y es recomendable usar const con objetos 
    console.log('Saludo desde la funcion flecha');
}
resultado2();

const resultado3 = ()=> console.log('Saludo desde la funcion flecha2')//NO necesitamos abrir el cuerpo(llaves), debido a que es solo una linea de codigo
console.log(resultado3());

//FUNCION FLECHA CON DEVOLUCION DE OBJETO
//Para el cuerpo de la funcion se pone parentesis, porque puede haber confucion entre la llave del objeto y el cuerpo de la funcion
const resultado4 = ()=>({nombre:'Juan', apellido:'Lara'}) ;
console.log(resultado4());

//FUNCION FLECHA CON PARAMETROS
//Con un parametro no es necesario poner parentesis
const resultado5 = nombre =>'Nombre: '+nombre ;
console.log(resultado5('Karla'));

const resultado6 = nombre =>{ return 'Nombre: '+nombre };
console.log(resultado6('Karla2'));

//Con varios parametros
const resultado7 = (op1,op2)=>{
    let result = op1+op2;
    return result;
};
console.log(resultado7(7,9));