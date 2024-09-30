//Estructuras de datos Simples
// Arrays - Almacen de datos de un mismo tipo ordenados e identificados por indices
let numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numeros.push(11) //se agrega a la ultima posicion de la lista el 11
debugger
console.log(JSON.stringify(numeros)); // 1,2,3,4,5,6,7,8,9,10,11
console.log(numeros[0]); // 1 ya que esta en el indice 0
numeros[0] = 50; // el primer numero del arreglo ahora será 50
numeros.unshift(100) //agrega 100 a la primera posición de la lista
numeros.pop() // elimina el ultimo numero de la lista en este caso el 11
numeros.reduce
console.log(numeros); // 100,50,1,2,3,4,5,6,7,8,9,10


// numeros.forEach(element => {
//   console.log('Elemento solo: ', element)
//   console.log('Elemento + elemento + 1',element + element++ )
// });

//Tuplas (como arrays) - pueden tener diferentes tipos de datos en cada posición, tienen un numero fijo de datos y son inalterables
let tupla: [string, number];
tupla = ["Edad", 30];
console.log(tupla); // ["edad", 30]
//tambien se puede acceder a los elementos por el indice como un array
console.log(tupla[0]); //Edad
console.log(tupla[1]); //30

// Objetos - colección de pares clave-valor. Las claves son únicas, y los valores pueden ser de cualquier tipo.

let persona3: { nombre: string; edad: number } = { nombre: "Deacon", edad: 21 };
console.log(persona3); // Object { nombre: "Deacon", edad: 21 }
console.log(persona3.nombre); //Deacon
console.log(persona3.edad); //21

//set - Estructura de datos que almacena solo valores unicos , no permite duplicados
let conjunto: Set<number> = new Set();
conjunto.add(1);
conjunto.add(2);
conjunto.add(1); //este no lo muestra debido a que ya fue insertado anteriormente
console.log(conjunto); //Set [ 1, 2 ]
console.log(conjunto.size); //tamaño del set : 2

//Map - Estructura parecida a los objetos pero permite que las claves sean cualquier tipo de dato.
let Mapa: Map<string, number> = new Map();
Mapa.set("uno", 1);
Mapa.set("dos", 2);
console.log(Mapa); // Map { uno → 1, dos → 2 }
console.log(Mapa.get("uno")); //1
console.log(Mapa.get("dos")); //2
//Mapa con las clave - valor de otro tipo (invertidos)
let Mapa2: Map<number, string> = new Map();
Mapa2.set(1, "uno");
Mapa2.set(2, "dos");
console.log(Mapa2); //  Map { 1 → "uno", 2 → "dos" }
console.log(Mapa2.get(1)); // 'uno'
console.log(Mapa2.get(2)); // 'dos'

//Listas enlazadas

class node<T> {
  valor: T;
  siguiete: node<T> | null = null;

  constructor(valor: T) {
    this.valor = valor;
  }
}
class listaEnlazada<T> {
  cabeza: node<T> | null = null;

  agregar(valor: T) {
    let nuevoNodo = new node(valor);
    if (this.cabeza == null) {
      this.cabeza = nuevoNodo;
    } else {
      let actual = this.cabeza;
      while (actual.siguiete != null) {
        actual = actual.siguiete;
      }
      actual.siguiete = nuevoNodo;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
    }
  }
  imprimir(){
    let actual = this.cabeza
    while(actual != null){
      console.log(actual.valor)
      actual = actual.siguiete
    }
  }
}

let listaEnlazada1 = new listaEnlazada();

listaEnlazada1.agregar(10);
listaEnlazada1.agregar(20);
listaEnlazada1.agregar(30);
listaEnlazada1.agregar(40);
listaEnlazada1.agregar(50);
listaEnlazada1.imprimir(); // 10, 20, 30, 40, 50

