//Función sin retorno, ni parámetros
function sumarNumeros() {
    const a = 10;
    const b = 15;
    const suma = a + b;
    console.log(suma);
  }
  sumarNumeros();
  
  //Función que recibe dos parametros
  //variables globales
  let saludo: string = "Hola";
  let pregunta: string = "¿Cómo estas?";
  function concatCadenas(cadena1: string, cadena2: string) {
    console.log(cadena1 + " " + cadena2);
  }
  concatCadenas(saludo, pregunta);
  
  //Funcion con retorno, un parametro y una funcion del lenguaje (.map)
  let personas2 = [
    { id: "1", nombre: "deacon" },
    { id: "2", nombre: "Sate jhon" },
  ];
  function retornFunctionExample(list: any) {
    //variables locales
    const nombres = list.map((persona: any) => persona.nombre); 
    const ids = list.map((persona: any) => persona.id);
    return console.log('Nombres: ',nombres +' - '+'Ids: '+ids);
  }
  
  retornFunctionExample(personas2);
  
  //Prueba de funcion dentro de funcion
  function pruebaConcatFunctions() {
    function hola() {
      console.log("Si es posible crear funciones dentro de otras funciones :0");
    }
    hola();
  }
  pruebaConcatFunctions();
  
  //Extra
  
  function StringNumber(cadena:string, cadena2: string){
    let contador = 1
    for (let index = 1; index <= 100; index++) {
      let multiTres = index % 3 == 0
      let multiCinco = index % 5 == 0
      let multiTresCinco = multiTres && multiCinco
      
      if(multiTresCinco){
        console.log( cadena +' '+ cadena2)
      }else if(multiTres){
        console.log(cadena)
      }else if(multiCinco){
        console.log(cadena2)
      }
      else{
        console.log(index)
        contador++;
      }
    }
    return contador
  }
  
  let primerMensaje = 'Hola'
  let segundoMensaje = 'Mundooooooo'
  console.log("Número de veces que se imprimió un distinto: ",StringNumber(primerMensaje,segundoMensaje))
  