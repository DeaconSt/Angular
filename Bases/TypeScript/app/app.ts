////////////////////////////////////////Punto #1///////////////////////////////////////
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