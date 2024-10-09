//Estructuras de datos Simples
// Arrays - Almacen de datos de un mismo tipo ordenados e identificados por indices
let numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numeros.push(11); //se agrega a la ultima posicion de la lista el 11
console.log(JSON.stringify(numeros)); // 1,2,3,4,5,6,7,8,9,10,11
console.log(numeros[0]); // 1 ya que esta en el indice 0
numeros[0] = 50; // el primer numero del arreglo ahora será 50
numeros.unshift(100); //agrega 100 a la primera posición de la lista
console.log(JSON.stringify(numeros)); // 100,50,2,3,4,5,6,7,8,9,10, 11
numeros.pop(); // elimina el ultimo numero de la lista en este caso el 11
numeros.shift(); // Elimina el primer elemento de la lista
console.log(numeros); // 50,2,3,4,5,6,7,8,9,10
// metodo filter: crea un nuevo array con todos los elementos que pasan una condición específica, basada en una función que defines
let numerosFilters = numeros.filter((numero) => numero >= 1 && numero <= 10); //la funcion almacena en el nuevo array los elementos que cumplen con la condición interna
console.log(numerosFilters); //2,3,4,5,6,7,8,9,10
// filter con indice
let numeros2: number[] = [10, 20, 30, 40, 50];
let resultado = numeros2.filter((num, index) => index % 2 === 0);
console.log(resultado); // [10, 30, 50]  (Solo los elementos en índices pares)
// Método splice: elimina un elemento del arreglo ORIGINAL usando su indice como parametro
let indice = numeros2.indexOf(30); //indexOf sirve para encontrar el indice del primer elemento con valor 30 (en este caso seria el 2), pero si no lo encuentra, devuelve -1
if (indice > -1) {
  numeros2.splice(indice, 1); //para eliminar solo un elemento, el primer parametro es el indice desde donde quiero eliminar y el segundo es la cantidad de elementos a eliminar
}
console.log(numeros2); //10, 20, 40, 50
//eliminar multiples elementos con splice
let numeros3: number[] = [1, 2, 3, 4, 5, 6, 7];
numeros3.splice(2, 3); // Elimina 3 elementos a partir del índice 2
console.log(numeros3); // [1, 2, 6, 7]
//Método slice: sirve para crear un subarreglo apartir de los elementos de otro arreglo
let numeros4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let subarray = numeros4.slice(2, 4); //del indice 2 al indice 4 (excluyendo este)
console.log(subarray); //3,4
//Caso sin el fin (el cual es opcional)
let subarray2 = numeros4.slice(2); //del indice 2 hasta el final del arreglo
console.log(subarray2); //3, 4, 5, 6, 7, 8, 9, 10
//caso con parametros negativos
let subarray3 = numeros.slice(-5, -1); // como -1 es el ultimo indice del arreglo SIEMPRE, se descuentan indices hasta -5 (10, 9, 8, 7, 6) en este caso 6 estaria en el indice -5
console.log(subarray3); // 6,7,8,9

//Tuplas (como arrays) - pueden tener diferentes tipos de datos en cada posición, tienen un numero fijo de datos y son inalterables
let tupla: [string, number];
tupla = ["Edad", 30];
console.log(tupla); // ["edad", 30]
//tambien se puede acceder a los elementos por el indice como un array
console.log(tupla[0]); //Edad
console.log(tupla[1]); //30

//set - Estructura de datos que almacena solo valores unicos , no permite duplicados
let conjunto: Set<any> = new Set(); //se debe establecer el tipo de datos que va a contener el set.
conjunto.add(1);
conjunto.add(2);
conjunto.add(1); //este no lo muestra debido a que ya fue insertado anteriormente
conjunto.add("25");
console.log(conjunto); //Set [ 1, 2, '25' ]
console.log(conjunto.size); //tamaño del set : 2
conjunto.delete(2); //elimina el elemento de valor 2
console.log("Conjunto: ", conjunto); //Set [ 1,'25' ]

//Map - Estructura parecida a los objetos pero permite que las claves sean cualquier tipo de dato.
let Mapa: Map<string, number> = new Map();
Mapa.set("uno", 1);
Mapa.set("dos", 2); //set sirve tanto para insertar elementos como para actualizarlos
console.log(Mapa); // Map { uno → 1, dos → 2 }
Mapa.set("dos", 550);
console.log("Mapa", Mapa); //Map { uno → 1, dos → 550 }
Mapa.delete("dos"); //se elimina la clave "dos" y su valor
console.log(Mapa);
console.log(Mapa.get("uno")); //1
console.log(Mapa.get("dos")); //2
//Mapa con las clave - valor de otro tipo (invertidos)
let Mapa2: Map<number, string> = new Map();
Mapa2.set(1, "uno");
Mapa2.set(2, "dos");
console.log(Mapa2); //  Map { 1 → "uno", 2 → "dos" }
console.log(Mapa2.get(1)); // 'uno'
console.log(Mapa2.get(2)); // 'dos'

// Objetos - colección de pares clave-valor. Las claves son únicas, y los valores pueden ser de cualquier tipo.
let persona3: { nombre: string; edad?: number } = {
  nombre: "Deacon",
  edad: 21,
}; //el ? es para indicar que la propiedad de este objeto es opcional, se debe usar si se quiere eliminar una propiedad
console.log(persona3); // Object { nombre: "Deacon", edad: 21 }
console.log(persona3.nombre); //Deacon
console.log(persona3.edad); //21
//Se actualizan los valores en las propiedades
persona3.nombre = "Jhon";
persona3.edad = 22;
console.log(persona3); // Object { nombre: "Jhon", edad: 22 }
delete persona3.edad; //se elimina la propiedad edad del objeto que esta marcada como opcional ?
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
  imprimir() {
    let actual = this.cabeza;
    while (actual != null) {
      console.log(actual.valor);
      actual = actual.siguiete;
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

/* 
DIFICULTAD EXTRA (opcional):
 * Crea una agenda de contactos por terminal.
 * - Debes implementar funcionalidades de búsqueda, inserción, actualización y eliminación de contactos.
 * - Cada contacto debe tener un nombre y un número de teléfono.
 * - El programa solicita en primer lugar cuál es la operación que se quiere realizar, y a continuación
 *   los datos necesarios para llevarla a cabo.
 * - El programa no puede dejar introducir números de teléfono no númericos y con más de 11 dígitos.
 *   (o el número de dígitos que quieras)
 * - También se debe proponer una operación de finalización del programa.
 */

const promp1 = require("prompt-sync")({ sigint: true });

// let nombre: string = promp1("Por favor, ingresa tu nombre: ");
// console.log(`Hola, ${nombre}!`);

interface contacto {
  nombre: string;
  telefono: string;
}

let agenda: contacto[] = [];

function menu() {
  console.log("!Bienvenido a tú agenda de contacos!");
  console.log("1. Buscar contacto");
  console.log("2. Agregar contacto");
  console.log("3. Actualizar contacto");
  console.log("4. Eliminar contacto");
  console.log("5. Cerrar agenda");
}

function buscarContacto(telefono: string) {
  let ContactoEncontrado = agenda.find((persona) => persona.telefono == telefono);//find se usa para encontrar el primer elemento de un arreglo que coincida con la condicion

  if (ContactoEncontrado) {
    console.log("El contacto es: " + ContactoEncontrado.nombre +' - ' + ContactoEncontrado.telefono);
  } else {
    console.log("Contacto no encontrado");
  }
}

function agregarContacto() {
  let telefono = promp1("Ingrese el número de teléfono: ");
  let nombre = promp1("Ingrese el nombre de la persona: ");
  let nuevoContacto: contacto = { nombre, telefono };
  let telefonoRepetido = agenda.find(persona => persona.telefono === telefono)

  // Validación del número de teléfono
  while (!/^\d{11}$/.test(telefono)) {
    console.log("El número de teléfono debe tener 11 dígitos.");
    telefono = promp1("Ingrese el número de teléfono:");
  }
  if(nombre && telefono){
    if(telefonoRepetido){
    console.log('Télefono ya registrado')
  }else{
    agenda.push(nuevoContacto)
    console.log('Contacto '+nuevoContacto.nombre+' - '+ nuevoContacto.telefono+' agregado con exito!')
  }
  }else{
    console.log('Por favor verifique los datos insertados e intente nuevamente')
  }
}

function actualizarContacto(){
  let telefono = promp1('Ingrese el número de teléfono del contacto a actualizar: ')
  let contactoActualizar = agenda.find(persona => persona.telefono === telefono)
  if(contactoActualizar){
    let telefono = promp1('Ingrese el nuevo número de telefono:')
    let nombre = promp1('Ingrese el nuevo nombre de la persona:')
    contactoActualizar.nombre = nombre
    contactoActualizar.telefono = telefono
    console.log('Contacto actualizado con éxito: ', contactoActualizar.nombre)
  }else{
    console.log('Contacto no encontrado, compruebe la información suministrada')
  }
}

function eliminarContacto(){
  let telefono = promp1('Ingrese el número de teléfono del contacto a eliminar: ')
  let contactoEliminar = agenda.find(persona => persona.telefono === telefono)
  let indice = agenda.findIndex(persona => persona.telefono === telefono)
  if(contactoEliminar){
    agenda.splice(indice,1)
    console.log('Contacto '+ contactoEliminar.nombre+' - '+ contactoEliminar.telefono+' eliminado con éxito')
  }else{
    console.log('Contacto no encontrado, compruebe la información suministrada')
  }
}

function main(){
  let opcion: string
  let eject: boolean = true

  do {
      menu()
      opcion = promp1('Ingrese la opción deseada: ')

      switch (opcion) {
        case "1":
          let telefonoContacto = promp1('Ingrese el teléfono del contacto a buscar: ')
          buscarContacto(telefonoContacto)
          break;
        case "2":
          agregarContacto()
          break;
        case "3":
          actualizarContacto()
          break;
        case "4":
          eliminarContacto()
          break; 
        case "5":
          console.log('Adiós')
          eject = false
          break;
        default:
          console.log('Opción invalida')
          break;
      }
  } while (eject);
}

main()

