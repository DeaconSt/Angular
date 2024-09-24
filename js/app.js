"use strict";
////////////////////////////////////////Punto #1///////////////////////////////////////
//Operador de asignación =
let numeroUno = 15;
let numeroDos = 20;
let comparation;
// n = n+b
numeroUno += numeroDos;
console.log(numeroUno); //35
// n = n-b
numeroDos -= numeroUno; //20 - 35
console.log(numeroDos); // -15
// Asi con demas operadores aritmeticos como *, /, %, etc.
//operadores booleanos
let verdadero = true;
let falso = false;
//Operadores aritmeticos
numeroUno = 15;
numeroDos = 20;
//suma +
let suma = numeroUno + numeroDos;
console.log(suma); //35
// resta -
let resta = numeroDos - numeroUno;
console.log(resta); //5
//División /
numeroUno = 5;
numeroDos = 100;
let division = numeroDos / numeroUno;
console.log(division); //20
//Multiplicación *
numeroUno = 4;
numeroDos = 7;
let Multiplicacion = numeroUno * numeroDos;
console.log(Multiplicacion); //28
//Exponente **
numeroUno = 5;
numeroDos = 5;
let exponente = numeroUno ** numeroDos;
console.log(exponente); //25
//Modulo o residuo %
numeroUno = 10;
numeroDos = 8;
let mod = numeroUno % numeroDos;
console.log('Mod', mod); // 2
//Operador de PREincremento - primero incrementa y luego se usa
numeroUno = ++numeroUno;
numeroDos = ++numeroDos;
console.log(numeroUno + " Y " + numeroDos); //11 Y 9
//Operado de POSTincremento - Primero se usa y luego incrementa
numeroUno = 18;
numeroDos = numeroUno++;
console.log(numeroUno + " Y " + numeroDos); //19 Y 18
//Operador de Predecremento - primero decrementa y luego se usa
numeroUno = --numeroUno;
numeroDos = --numeroDos;
console.log(numeroUno + " Y " + numeroDos); //18 y 17
//Operador de Postdecremento - primero se usa y luego decrementa
numeroUno = 55;
numeroDos = numeroUno--;
console.log(numeroUno + " Y " + numeroDos); // 54 y 55
//Operador unario de suma
let primerNumero = "1012";
let segundoNumero = "3923";
let unaryPlus = +primerNumero;
console.log(unaryPlus); // number =  1012
let unaryMinus = -segundoNumero;
console.log(unaryMinus); // number = -3923
//Operadores de comparación
//Comparador de identidad ===
numeroUno = 12;
numeroDos = 12;
comparation = numeroUno === numeroDos;
console.log("identity", comparation); // true, porque son identicamente iguales en tipo de dato y valor  (operador de igualdad estricta)
//Comparador de igualdad ==
numeroUno = 84;
numeroDos = 12;
comparation = numeroUno == numeroDos;
console.log(comparation); //falso
//Comparador de desigualdad !=
numeroUno = 15;
numeroDos = 55;
comparation = numeroUno != numeroDos;
console.log(comparation); //verdadero
//Comparador de no identidad !==
numeroUno = 12;
numeroDos = 13;
comparation = numeroUno !== numeroDos;
console.log("No identity", comparation); //false, debido a que los datos son exactamente iguales (operador de desigualdad estricta)
//Comparador de mayor >
numeroUno = 35;
numeroDos = 90;
comparation = numeroUno > numeroDos;
console.log(comparation); //falso
//Comparador de menor <
numeroUno = 35;
numeroDos = 90;
comparation = numeroUno < numeroDos;
console.log(comparation); //verdadero
//Comparador de mayor o igual >=
numeroUno = 520;
numeroDos = 150;
comparation = numeroUno >= numeroDos;
console.log(comparation); //verdadero
//Comparador de menor o igual <=
numeroUno = -40;
numeroDos = 10;
comparation = numeroUno <= numeroDos;
console.log(comparation); //verdadero
//Operadores lógicos
/*  Valores de verdad y falsedad:
        Falsedad: false, 0, -0, 0n, "", null, undefined, NaN
        Verdad: todo lo demás, incluido "0", "falso", [], {}, function(){} */
// and &&
let andResult1 = true && true; // true
let andResult2 = true && false; // false
let andResult3 = false && true; // false
let andResult4 = false && false; // false
// uso de corto circuito y valores no booleanos
let andShortCircuit1 = 0 && "hello"; // 0 (falsy, short-circuits)
let andShortCircuit2 = 1 && "hello"; // "hello"
let andShortCircuit3 = "hello" && 0; // 0
let andShortCircuit4 = null && undefined; // null (falsy, short-circuits)
// OR ||
let orResult1 = true || true; //truue
let orResult2 = true || false; //true
let orResult3 = false || true; //true
let orResult4 = false || false; //false
let y = 5;
y <<= 1; // y = y << 1; // Left shifts y by 1 bit and assigns the result to y
y >>= 1; // y = y >> 1; // Right shifts y by 1 bit and assigns the result to y
y >>>= 1; // y = y >>> 1; // Unsigned right shifts y by 1 bit and assigns the result to y
let z = 7;
z &= 3; // z = z & 3; // Performs bitwise AND on z and 3, assigns the result to z
z |= 4; // z = z | 4; // Performs bitwise OR on z and 4, assigns the result to z
z ^= 2; // z = z ^ 2; // Performs bitwise XOR on z and 2, assigns the result to z
let str = "Hola ";
str += "Mundo"; // se pueden concatenar cadenas de texto con +
console.log(str); //Hola mundo
//Operadores de pertenencia para evaluar si un objeto o estrucutura contiene algo
let person = { name: "Deacon", age: 21 };
let car = ["toyota", "ford", "Renault"];
console.log("name" in person && "age" in person); //true
console.log("color" in person); // false
console.log(0 in car); // true porque exise el indice 0
console.log(3 in car); // false porque no existe el indice 3
// Instancia de objetos
class animal {
}
class cat extends animal {
}
let DeaconCats = new cat();
console.log(DeaconCats instanceof cat); // true - instanceof para verificar si un objeto es instanciado de una determinada clase
console.log(DeaconCats instanceof animal); // true
console.log(DeaconCats instanceof Object); // true
//Funcion .includes() para arrays
let frutas = ["pera", "manzana", "mandarina"];
console.log("frutas: ", frutas.includes("pera")); // true
console.log(frutas.includes("banano")); //false
//Funcion .includes para strings
let message = "Hola mundo verdadero";
console.log(message.includes("Hola")); //true
console.log(message.includes("falso")); //false
console.log(message.includes("x")); //false
console.log(message.includes("e")); //true
//funcion .hasownproperty (para saber si un objeto tiene una propiedad propia asignada (no cuentan propiedades heredadas))
let libro = { title: "habitos atomicos", author: "tupu" };
console.log(libro.hasOwnProperty("title")); //true
console.log(libro.hasOwnProperty("pages")); //false
//estructuras de control en typescript
let x = 10; //en funcion de este valor, se enviara cierto mensaje
//Solo if
if (x > 1) {
    console.log(x + " es mayor que 1");
}
//if - else
if (x > 5) {
    console.log(x + " es mayor que 5");
}
else {
    console.log(x + " es menor o igual a 5");
}
//if - else if
if (x > 5) {
    console.log(x + " es mayor que 5");
}
else if (x < 5) {
    console.log(x + " es menor que 5");
}
else {
    console.log(x + " es igual que 5");
}
//switch control
let dayWeek = 6;
switch (dayWeek) {
    case 6:
        console.log("Dia sabado");
        break; //es para que al ejecutar las lineas de codigo anteriores, se cierre el switch, si no se pone se ejecutara el default tambien
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Ni idea de que dia es :c");
        break;
}
//Ciclos e iteraciones
for (let index = 1; index <= 10; index++) {
    //primero 10 numeros
    console.log("numero: ", index);
}
dayWeek = 1;
while (dayWeek <= 7) {
    console.log("Dia de la semana", dayWeek);
    dayWeek++;
}
console.log('Do - While');
dayWeek = 1;
do {
    console.log("Dia de la semana", dayWeek);
    dayWeek++;
} while (dayWeek <= 7);
//For of -> Para recorrer directamente los valores de un array o string por ejemplo
let animales = ['perro', 'vaca', 'raton'];
for (const element of animales) {
    console.log(element);
}
//for - in -> Para recorrer directamente sobre las claves o propiedades de un objeto, tambien indices
for (const key in animales) {
    console.log(key); // 0,1,2
}
const perro = {
    nombre: 'Firulais',
    Raza: 'Pitbull',
    Años: 8
};
for (const key in perro) {
    console.log(key); //nombre, raza, años
}
// .map para arreglos y elementos dentro de arreglos para tomar los valores de sus propiedades
const personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "María", edad: 30 },
    { nombre: "Pedro", edad: 40 }
];
const edades = personas.map((persona) => persona.edad);
console.log(edades); // [25, 30, 40]
//foreach
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numeros.forEach(element => {
    console.log(element);
});
//try catch utilizado para el manejo de errores
try {
    let x = 10;
    let y = 0;
    let div = x / y;
    if (y == 0) {
        throw new Error('Division por 0!');
    }
    console.log(div);
}
catch (error) {
    console.log('Ha ocurrido un error', error);
}
finally {
    console.log('La división ha sido ejecutada');
}
//ejercicio extra
let w = 55;
for (let index = 10; index <= w; index++) {
    let isMultipleTothree = index % 3 == 0;
    let isSixteen = index === 16;
    let pares = index % 2 === 0;
    if (!isMultipleTothree && !isSixteen && pares) {
        console.log(index);
    }
}
