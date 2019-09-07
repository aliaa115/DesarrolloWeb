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


var botNum = function(num){
    resul.innerText = resul.innerText + (num)
}

var borrar = function(){
    resul.innerText = "";
}