// Para instalar typescript--> npm install -g typescript
//TIPOS DE DATOS EN TYPESCRIPT
var saludo = "Hola desde TypeScript"; //ya se le signa como un tipo de dato string , ya no se puede asignar otro tipo de dato
var numero; // o podemos inicializar con un tipo de dato asignado como number
numero = 10;
var cualquiera; //tambien podemos asignar un any que podemos asignar cualquier tipo de dato, pero no es aconsejable
cualquiera = 'hola';
cualquiera = 10;
var PI = 3.14; //Variable constante
function saludar() {
    console.log(saludo);
}
saludar();
