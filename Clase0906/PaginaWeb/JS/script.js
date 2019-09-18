//Se definen las variables globales a utilizar
    //numeros
var num1 = document.getElementById("1");
var num2 = document.getElementById("2");
var num3 = document.getElementById("3");
var num4 = document.getElementById("4");
var num5 = document.getElementById("5");
var num6 = document.getElementById("6");
var num7 = document.getElementById("7");
var num8 = document.getElementById("8");
var num9 = document.getElementById("9");
var num0 = document.getElementById("0");

    //simbolos
var numPunto = document.getElementById(".");
var numIgual = document.getElementById("=");
var numMAs = document.getElementById("+");
var numDiv = document.getElementById("/");
var numMenos = document.getElementById("-");
var numPor = document.getElementById("*");

    //Pantalla que mustra las operaciones
var resul = document.getElementById("pResultado");

    //variables para manejar las transacciones
var valor1 = 0;
var valor2 = 0;
var accion = "";
var estado = 1;
var operacionAccionada = 0;
var punto = 0

    //funcion para imprimir el numero presionado
var botNum = function(num){
    if (num == '.'){
        if (punto == 0){
            resul.innerText = resul.innerText + (num);
            punto++;
        }
        if (punto != 0){return;}
    }
    else{
        if(estado == 1){
            resul.innerText = resul.innerText + (num);
        }
        if(estado == 0){
            estado =1;
            resul.innerText = num;
        }
    }
}

    //boton para borrar la pantalla
var borrar = function(){
    resul.innerText = "";
    valor1 = 0;
    valor2 = 0;
    accion = "";
    punto =0;
}

    //boton para realizar la accion
var accionPresionada = function(boton){
    //en caso de que no haya ninguna operacion previa
    if (accion == ""){
        valor1 = parseFloat(resul.innerText);
        valor2 = valor2;
        console.log(valor1, valor2, accion);
        estado = 0;
    }
    //en caso de que hubiera una resta previa
    if(accion == "-"){
        estado = 0;
        valor2 = valor1 - parseFloat(resul.innerText);
        valor1 = valor2;
        console.log(valor1, valor2, accion);
        resul.innerText = parseFloat(valor2); 
    }
    //en caso de que hubiera una suma previa
    if(accion == "+"){
        estado = 0;
        valor2 = valor1 + parseFloat(resul.innerText);
        valor1 = valor2;
        console.log(valor1, valor2, accion);
        resul.innerText = parseFloat(valor2); 
    }
    //en caso de que hubiera una multiplicacion previa
    if(accion == "*"){
        estado = 0;
        valor2 = parseFloat(valor1) * parseFloat(resul.innerText);
        valor1 = valor2;
        console.log(valor1, valor2, accion);
        resul.innerText = parseFloat(valor2); 
    }
    //en caso de que hubiera una division previa
    if(accion == "/"){
        estado = 0;
        valor2 = valor1 / parseFloat(resul.innerText);
        valor1 = valor2;
        console.log(valor1, valor2, accion);
        resul.innerText = parseFloat(valor2); 
    }
    // se define la accion
    accion = boton;
    punto =0;
}

//cunado se da al boton =
var mostrarresultado = function(){
    if(operacionAccionada ==0){
        if (accion == "-"){
            valor2 = valor1 - parseFloat(resul.innerText);
        }
        if (accion == "+"){
            valor2 = valor1 + parseFloat(resul.innerText);
        }
        if (accion == "/"){
            valor2 = valor1 / parseFloat(resul.innerText);
        }
        if (accion == "*"){
            valor2 = valor1 * parseFloat(resul.innerText);
        }
    }
    console.log(valor1, valor2, accion);
    estado = 0;
    accion = "";
    resul.innerText = valor2; 
    punto =0;
}

