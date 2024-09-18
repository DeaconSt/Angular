////////////////////////////////////////Punto #1///////////////////////////////////////
    //Operador de asignación = 
    let numeroUno: number = 15;
    let numeroDos: number = 20;
    let comparation: boolean;
        // n = n+b
        numeroUno += numeroDos
        console.log(numeroUno) //35
        // n = n-b
        numeroDos -= numeroUno //20 - 35
        console.log(numeroDos) // -15
        // Asi con demas operadores aritmeticos como *, /, %, etc.
    //Operadores aritmeticos
    numeroUno = 15
    numeroDos = 20
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
        console.log(mod); // 1
        //Operador de PREincremento - primero incrementa y luego se usa
        numeroUno = ++numeroUno;
        numeroDos = ++numeroDos;
        console.log(numeroUno+' Y ' +numeroDos); //11 Y 9
        //Operado de POSTincremento - Primero se usa y luego incrementa
        numeroUno = 18;
        numeroDos = numeroUno++;
        console.log(numeroUno+' Y ' +numeroDos); //19 Y 18
        //Operador de Predecremento - primero decrementa y luego se usa
        numeroUno = --numeroUno;
        numeroDos = --numeroDos;
        console.log(numeroUno+' Y ' +numeroDos); //18 y 17
        //Operador de Postdecremento - primero se usa y luego decrementa
        numeroUno = 55;
        numeroDos = numeroUno--;
        console.log(numeroUno +' Y '+ numeroDos); // 54 y 55
        //Operador unario de suma
        let primerNumero: string = "1012";
        let segundoNumero: string = "3923";
        let unaryPlus = +primerNumero;
        console.log(unaryPlus) // number =  1012
        let unaryMinus = -segundoNumero;
        console.log(unaryMinus) // number = -3923



    //Operadores de comparación
        //Comparador de identidad ===
        numeroUno = 12
        numeroDos = 12
        comparation = numeroUno === numeroDos
        console.log('identity',comparation) // true, porque son identicamente iguales en tipo de dato y valor  (operador de igualdad estricta)
        //Comparador de igualdad ==
        numeroUno = 84
        numeroDos = 12
        comparation = numeroUno == numeroDos;
        console.log(comparation); //falso
        //Comparador de desigualdad !=
        numeroUno = 15;
        numeroDos = 55;
        comparation = numeroUno != numeroDos;
        console.log(comparation); //verdadero
        //Comparador de no identidad !==
        numeroUno = 12
        numeroDos = 12
        comparation = numeroUno !== numeroDos
        console.log('No identity',comparation)//false, debido a que los datos son exactamente iguales (operador de desigualdad estricta)
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
            let andResult1: boolean = true && true; // true
            let andResult2: boolean = true && false; // false
            let andResult3: boolean = false && true; // false
            let andResult4: boolean = false && false; // false
    
            // uso de corto circuito y valores no booleanos
            let andShortCircuit1: any = 0 && 'hello'; // 0 (falsy, short-circuits)
            let andShortCircuit2: any = 1 && 'hello'; // "hello"
            let andShortCircuit3: any = 'hello' && 0; // 0
            let andShortCircuit4: any = null && undefined; // null (falsy, short-circuits)
        
        // OR ||
            console.log("CAMBIOS SUBIDOS")

        
    //operadores booleanos
    let verdadero:boolean = true    
    let falso: boolean = false

        