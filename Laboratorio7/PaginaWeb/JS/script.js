//1--Impresion de Un texto simple en pantalla
document.write("Esto es una practica de JavaScript");

//2--Declaracion de variables para las operaciones
var ingresoUsuario1, ingresoUsuario2
var suma, num1, num2

//3--Peticion de una Variable al usuario
ingresoUsuario1 = prompt("Ingrese un texto de prueba para mostrar en Pantalla: ");
ingresoUsuario2 = prompt("Ingrese un texto de prueba para mostrar en Consola: ");

//4--Impresion en pantalla de la variable
document.write(ingresoUsuario1);

//5--Impresion en consola de la variable
console.log(ingresoUsuario2);

//6--Asignacion de valores a variables de suma
num1 = 1;
num2 = 2;

//7--Realizar la suma 
suma = num1 + num2;

//8--Mostrar suma como alerta
window.alert("La suma es: "+suma);
