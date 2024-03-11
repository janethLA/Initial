// Para instalar typescript--> npm install -g typescript

//TIPOS DE DATOS EN TYPESCRIPT
let saludo="Hola desde TypeScript"; //ya se le signa como un tipo de dato string , ya no se puede asignar otro tipo de dato

let numero:number; // o podemos inicializar con un tipo de dato asignado como number
numero=10;

let cualquiera:any; //tambien podemos asignar un any que podemos asignar cualquier tipo de dato, pero no es aconsejable
cualquiera='hola';
cualquiera=10;

const PI=3.14; //Variable constante

function saludar(){
    console.log(saludo);
}
saludar();