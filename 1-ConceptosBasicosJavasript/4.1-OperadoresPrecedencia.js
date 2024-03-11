//PRECEDENCIA DE OPERADORES
let a = 3, b=2, c=1, d=4;
let z;

z = c*b+a; //Primero multiplica por el nivel de precedencia que tiene, luego suma
console.log(z); 
z = a+c*b; //Primero multiplica por el nivel de precedencia que tiene, luego suma
console.log(z); 

//--> la multiplicacion y la division estan en el mismo nivel , realiza la primera operacion de izquierda a derecha
z = c*b+a/d; //Primero multiplica(c y b), luego divide (a y d)y al final suma los resultados anteriores
console.log(z); 
z = a+c*b/d; //Primero multiplica (c y b), luego divide (el resultado de la multiplicacion con  d)y al final suma el resultado de la division con a
console.log(z); 
z = a+c/b*d; //Primero divide (c y b), luego multiplica (el resultado de la division con  d)y al final suma el resultado de la multiplicacion con a
console.log(z); 
z = (a+c)/b*d; //Primero suma por el perentesis(por su nivel de precedencia), luego divide la suma con b y multiplica (resultado de la division y d)
console.log(z); 
