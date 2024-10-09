//Cadenas de caracteres
/*
 * EJERCICIO:
 * Muestra ejemplos de todas las operaciones que puedes realizar con cadenas de caracteres
 * en tu lenguaje. Algunas de esas operaciones podrían ser (busca todas las que puedas):
 * - Acceso a caracteres específicos, subcadenas, longitud, concatenación, repetición, recorrido,
 *   conversión a mayúsculas y minúsculas, reemplazo, división, unión, interpolación, verificación...
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea un programa que analice dos palabras diferentes y realice comprobaciones
 * para descubrir si son:
 * - Palíndromos
 * - Anagramas
 * - Isogramas
 */

//Concatenar : unir las cadenas

let saludo: string = "Hola ";
let res: string = saludo + "mundo";
console.log(res); //Hola mundo

//Acceso a caracteres : devuelve el caracter que este en ese indice especifico
console.log(saludo[0]); //H

//longitud de la cadena : el numero total de caracteres
console.log(res.length); //10

//CharAt(indice): Devuelve el caracter de un indice especifico (no recibe indices negativos)
let ts: string = "TypeScript";
console.log(ts.charAt(ts.length - 1)); // t

//indexOf(subcadena) : devuelve el indice o posición de la primera aparición de una cadena
console.log(ts.indexOf("Type")); // 0
console.log(ts.indexOf("Script")); // 4

//LastIndexOf(subcadena): devuelve el indice o posición de la ultima aparición de una cadena
console.log(ts.lastIndexOf("t")); // 9
console.log(ts.lastIndexOf("p")); // 8

//ToUpperCase: devuelve la cadena de caracteres en mayuscula
console.log("Mayus: ", ts.toUpperCase()); //Mayus:  TYPESCRIPT

//ToLoweerCase: devuelve la cadena de caracteres en minuscula
console.log("Minus: ", ts.toLowerCase()); //Minus:  typescript

//Trim: Elimina los espacios en blanco al inicio y final del string
let meg: string = "  pruebaTrim     ";
console.log(meg.trim()); //pruebaTrim

//Slice(inicio,fin): Extrae una parte de la cadena y devuelve una nueva cadena, sin modificar la original.
//res = hola mundo
console.log(res.slice(0, 4)); // Hola: 0 es el indice desde donde quiero que se extraiga la subcadena y 4 es hasta donde, inicio - fin

//Substring(inicio, fin): Similar a slice pero no permite valores negativos
console.log(res.substring(5)); // Mundo: Si solo pongo el indice de inicio, la subcadena va hasta el final de la cadena original
res = "Hola mundo, Hola universo, Hola tierra";

//Replace(buscar, reemplazo): reemplaza una cadena por otra, si se quiere reemplazar todas las coincidencias, se usa una expresión regular con el modificador g.
console.log(res.replace("mundo", "universo")); //Hola universo
console.log(res.replace(/Hola/gi, "Hey")); //Hey mundo, Hey universo, Hey tierra

//Split(delimitador): divine una cadena en un arreglo en base a su delimitador
let partes = res.split(",");
console.log(partes); //[ 'Hola mundo', ' Hola universo', ' Hola tierra' ]

//Includes(subcadena): sirve para verificar si una cadena contiene una subcadena, devuelve true o false
console.log(partes[0].includes("Hola mundo")); //True
console.log(partes[2].includes("Hola omniverso")); //False

//starWith(subcadena): Sirve para determinar si una cadena comienza con una subcadena
//ts: 'Typescript
console.log(ts.startsWith("T")); //True

//endWith(subcadena): Sirve para determinar si una cadena termina con una subcadena
console.log(ts.endsWith("t")); //True

//Repeat (veces): Repite el string las veces
console.log(ts.repeat(5)); //TypeScriptTypeScriptTypeScriptTypeScriptTypeScript

/*
 * DIFICULTAD EXTRA (opcional):
 * Crea un programa que analice dos palabras diferentes y realice comprobaciones
 * para descubrir si son:
 * - Palíndromos:  palabra o frase que se lee igual en un sentido que en otro
 * - Anagramas:  palabra que resulta de la transposición de todas las letras de otra palabra.
 * - Isogramas: palabra o frase en la que cada letra aparece el mismo número de veces
 */
const promp1 = require("prompt-sync")({ sigint: true });

function stringsPractique() {
  let palabra1 = promp1("Ingrese la primera palabra: ").toLowerCase();
  let palabra2 = promp1("Ingrese la segunda palabra: ").toLowerCase();
  //PALINDROMOS
  function palindromo(palabra1: string, palabra2: string) {
    let palindromo1 = palabra1.split("").reverse().join("");
    console.log(
      `La palabra ${palabra1} es: ${
        palabra1 === palindromo1 ? "palindromo" : " no palindromo"
      }`
    );
    let palindromo2 = palabra2.split("").reverse().join("");
    console.log(
      `La palabra ${palabra2} es: ${
        palabra2 === palindromo2 ? "palindromo" : " no palindromo"
      }`
    );
  }
  palindromo(palabra1, palabra2);

  // Anagrama
  function anagrama(palabra1: string, palabra2: string) {
    let anagrama1 = palabra1.split("").sort().join("").trim(); //primero se separa en un arreglo y luego se ordenan las letras y se quitan los espacios para poder comparar mas de una palabra
    let anagrama2 = palabra2.split("").sort().join("").trim();
    console.log(
      `Las palabras ${palabra1} y ${palabra2} ${
        anagrama1 == anagrama2 ? "son alagramas" : "no son alagramas"
      }`
    );
  }
  anagrama(palabra1, palabra2)

  //Isograma
  function isograma(palabra1: string, palabra2: string) {
    let Set1 = new Set(palabra1);
    let Set2 = new Set(palabra2);
    let count: number = 0;
    console.log(
      `La palabra ${palabra1}: ${
        palabra1.length == Set1.size ? "es heterograma" : "no es heterograma"
      }`
    );
    console.log(
      `La palabra ${palabra2}: ${
        palabra2.length == Set2.size ? "es heterograma" : "no es heterograma"
      }`
    );

    function validarGradoIsograma(palabra: string){
      let contadorL: {[key: string]: number} = {}
    for (const letra of palabra) {
      contadorL[letra] = (contadorL[letra] || 0) + 1;
    }
  let isograma:boolean = true
  let valores = Object.values(contadorL) //object values para obtener los valores del objeto , si requiero las claves seria object keys
  let gradoIsograma: number = valores[0]
  for (const palabra of valores) {
    if(palabra != gradoIsograma){
      isograma = false
      break;
    }
  }
  console.log(`La palabra ${palabra} ${isograma ? 'es un isograma' : 'no es un isograma'}`)
    }
    validarGradoIsograma(palabra1)
    validarGradoIsograma(palabra2)
  }
  isograma(palabra1, palabra2);
}
stringsPractique();
