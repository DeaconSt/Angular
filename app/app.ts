////////////////////////////////////////Punto #1///////////////////////////////////////
    //Operador de asignación = 
    let numeroUno: number = 15;
    let numeroDos: number = 20;
    let comparation: boolean;
    //Operadores aritmeticos
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
        //Operador de PREincremento
        numeroUno = ++numeroUno;
        numeroDos = ++numeroDos;
        console.log(numeroUno+' Y ' +numeroDos); //11 Y 9
        //Operado de POSTincremento
        numeroUno = 18;
        numeroDos = numeroUno++;
        console.log(numeroUno+' Y ' +numeroDos); //19 Y 18
        //Operador de Predecremento
        numeroUno = --numeroUno;
        numeroDos = --numeroDos;
        console.log(numeroUno+' Y ' +numeroDos); //18 y 17
        //Operador de Postdecremento
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

    //Operadores decomparación ==
        //Comparador de igualdad
        comparation = numeroUno == numeroDos;
        console.log(comparation); //falso
        //Comparador de desigualdad !=
        numeroUno = 15;
        numeroDos = 55;
        comparation = numeroUno != numeroDos;
        console.log(comparation); //verdadero
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
        