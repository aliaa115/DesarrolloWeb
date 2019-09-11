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
var numPunto = document.getElementById(".");
var numIgual = document.getElementById("=");
var numMAs = document.getElementById("+");
var numDiv = document.getElementById("/");
var numMenos = document.getElementById("-");
var numPor = document.getElementById("*");

var resul = document.getElementById("pResultado");

var valor1 = 0;
var valor2 = 0;
var accion = "";
var estado = 1;
var operacionAccionada = 0;

var botNum = function(num){
    if(estado == 1){
        resul.innerText = resul.innerText + (num);
    }
    if(estado == 0){
        estado =1;
        resul.innerText = num;
    }
}

var borrar = function(){
    resul.innerText = "";
    valor1 = 0;
    valor2 = 0;
    accion = "";
}

var restar = function(){
    if (accion == ""){
        valor1 = parseFloat(resul.innerText);
        console.log(valor1, valor2, accion);
        estado = 0;
    }
    if(accion == "-"){
        estado = 0;
        valor2 = valor1 - parseFloat(resul.innerText);
        valor1 = valor2;
        console.log(valor1, valor2, accion);
        resul.innerText = valor2; 
    }
    if(accion == "+"){
        estado = 0;
        valor2 = valor1 + parseFloat(resul.innerText);
        console.log(valor1, valor2, accion);
        resul.innerText = valor2; 
    }
    accion = "-";
}

var suma = function(){
    valor1 = parseInt(resul.innerText);
    accion = "+";
    resul.innerText = "";
}

var mostrarresultado = function(){
    if(operacionAccionada ==0){
        if (accion == "-"){
            valor2 = valor1 - parseFloat(resul.innerText);
        }
    }
    console.log(valor1, valor2, accion);
    estado = 0;
    accion = "";
    resul.innerText = valor2; 
}

