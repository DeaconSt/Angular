/* VALOR Y REFERENCIA
 * EJERCICIO:
 * - Muestra ejemplos de asignación de variables "por valor" y "por referencia", según
 *   su tipo de dato.
 * - Muestra ejemplos de funciones con variables que se les pasan "por valor" y 
 *   "por referencia", y cómo se comportan en cada caso en el momento de ser modificadas.
 * (Entender estos conceptos es algo esencial en la gran mayoría de lenguajes)
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea dos programas que reciban dos parámetros (cada uno) definidos como variables anteriormente.
 * - Cada programa recibe, en un caso, dos parámetros por valor, y en otro caso, por referencia.
 *   Estos parámetros los intercambia entre ellos en su interior, los retorna, y su retorno
 *   se asigna a dos variables diferentes a las originales. A continuación, imprime el valor de las
 *   variables originales y las nuevas, comprobando que se ha invertido su valor en las segundas.
 *   Comprueba también que se ha conservado el valor original en las primeras.
 */

/* Por valor: se trabaja una copia del valor original, cualquier cambio en la variable no afecta el valor original,
 los tipos primitivos (como number, boolean, string, null, undefined, symbol, y bigint) se manejan por valor.
*/

let a:number = 10
let b: number = a //aqui se copia el valor de a en b
b = 20 //aqui se cambia directamente el valor de b, no afecta el valor de a

console.log(a) //10
console.log(b) //20

/* Por referencia: Los objetos y arreglos en ts se manjan por referencia,
Esto significa que cuando asignas una variable a otra o la pasas a una función, 
ambas variables apuntan al mismo espacio de memoria. Cualquier cambio realizado a través de una variable afecta también a la otra.
*/

//Ejemplo con objetos
let obj1 = {nombre: 'Daniel'};
let obj2 = obj1 // obj2 esta haciendo referencia al mismo objeto que obj1

//si se hace un cambio a una propiedad del primer objeto, desde el segundo objeto, al estar apuntando al mismo espacio en memoria, ambos camiaran
obj2.nombre = 'Deacon st jhon'
console.log(obj1) //{ nombre: 'Deacon st jhon' }
console.log(obj2) //{ nombre: 'Deacon st jhon' }
obj1.nombre = 'jon'
//y en vicebersa
console.log(obj1) //{ nombre: 'jon' }
console.log(obj2) //{ nombre: 'jon' }
//Ejemplo con arrays
let array1 = [1,2,3,4,5]
let array2 = array1
array2.push(8)
console.log(array1) //[ 1, 2, 3, 4, 5, 8 ]
console.log(array2) //[ 1, 2, 3, 4, 5, 8 ]
//y en vicebersa
array1.pop()
console.log(array1) //[ 1, 2, 3, 4, 5 ]
console.log(array2) //[ 1, 2, 3, 4, 5 ]

/* para evitar que un objeto o array al ser modificado, modifique el objeto del que se hace referencia, 
se puede clonar su valor en vez de apuntar al mismo espacio en memoria */
//con arrays es con el operador de progragación -> [...]  el cual copia los VALORES
let arreglo1 = [1,2,3,4,5]
let arreglo2 = [...arreglo1] //se copian los valores dentro de arreglo 1

arreglo2.push(50) //el arreglo 1 ya no se ve modificado
console.log(arreglo1) //[ 1, 2, 3, 4, 5 ]
console.log(arreglo2) //[ 1, 2, 3, 4, 5, 50 ]

//con objetos es con el operador de progragació -> {...} el cual copia las PROPIEDADES
let objeto1 = {name:'Juan'}
let objeto2 = {...objeto1}

objeto2.name = 'Felipe'
console.log(objeto1) //{ name: 'Juan' }
console.log(objeto2); //{ name: 'Felipe' }

//funciones con datos por valor
let miInt: number = 50
function valor1(ent:number){
    ent = 25
    console.log(ent)
}
valor1(miInt) // 25
console.log(miInt) //sigue siendo 50
function valor2(ent:number){
    ent = 100
    miInt = ent
    console.log(miInt) //100
}
valor2(miInt)
console.log(miInt) //Aqui ya vale 100

//funciones con datos por referencia
let listParam:number[] = [1,2,3,4,5]
let number: number = 435
function referencia1(lista:number[], number:number){
    lista.push(number)
    console.log(lista)//[ 1, 2, 3, 4, 5, 435 ]
}
referencia1(listParam,number)
console.log(listParam) //[ 1, 2, 3, 4, 5, 435 ], el objeto se modificó dentro de la funcion porque dentro de esta se apunta a su mismo espacio en memoria al pasarlo como parametro

////funciones con datos por referencia clonados
listParam = [1,2,3,4,5]
function referencia2(lista:number[], number:number){
    let listaClon = [...lista] //solo se clonan los valores del objeto para no modificar este fuera de la función
    listaClon.push(number)
    console.log(listaClon) //[ 1, 2, 3, 4, 5, 435 ]
}
referencia2(listParam,number)
console.log(listParam) //[ 1, 2, 3, 4, 5 ] -> el objeto no se ve afectado fuera de la función

/* DIFICULTAD EXTRA (opcional):
* Crea dos programas que reciban dos parámetros (cada uno) definidos como variables anteriormente.
* - Cada programa recibe, en un caso, dos parámetros por valor, y en otro caso, por referencia.
*   Estos parámetros los intercambia entre ellos en su interior, los retorna, y su retorno
*   se asigna a dos variables diferentes a las originales. A continuación, imprime el valor de las
*   variables originales y las nuevas, comprobando que se ha invertido su valor en las segundas.
*   Comprueba también que se ha conservado el valor original en las primeras.
*/
//por valor
let v1: number = 40
let v2: number = 350
function programa1(valor1: number, valor2: number): number[]{
    let aux = valor1
    valor1 = valor2
    valor2 = aux
    return [valor1 , valor2 ]
}

[v1,v2] = programa1(v1,v2)
console.log(v1) //350
console.log(v2); //40

//por referencia
let object1:number [] = [1,2,3,4,5]
let object2:number [] = [6,7,8,9,10]
function programa2(objeto1:number [], objeto2:number[]){
    let aux = objeto1 //se guarda el puntero del objeto1
    objeto1 = objeto2
    objeto2 = aux
return [objeto1,objeto2]
}

[object1,object2]= programa2(object1, object2)

console.log('objeto1: ',object1) //objeto1:  [ 6, 7, 8, 9, 10 ]
console.log(object2); //[ 1, 2, 3, 4, 5 ]