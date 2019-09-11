
var boton1 = document.getElementById("Iniciar");
var boton2 = document.getElementById("Sig");
var boton3 = document.getElementById("Ult");
var boton4 = document.getElementById("Recargar");

var botonMax = document.getElementById("botMax");
var botonMin = document.getElementById("botMin");

var botonConpuerta = document.getElementById("botComp");

var divMax = document.getElementById("divMax");
var divMax = document.getElementById("divMax");

var pMax = document.getElementById("pMax");
var pMax = document.getElementById("pMax");

var proceso = document.getElementById("proceso");

var bloquearBoton = function(estado, color1, color2, boton){
  boton.disabled = estado;
  boton.style.backgroundColor = color1;
  boton.style.color = color2;
}

var alertaNum = function(){
    var randomArr = Array.from({length: 15}, () => Math.floor(Math.random() * 100));
    listaMov = randomArr;
    listaInic = randomArr;
    returnLista = randomArr;
    return randomArr;
}

var altura = function(dato) {
    var alt = dato + 10;
    var altura = alt.toString();
    altura = altura + "px";
    return altura 
}

var pasoAPaso = function(){
  let i = intI;
  var arr = returnLista;
  const l = arr.length;
  if(i == (l-1)){
    bloquearBoton(true, 'gray', 'black', boton1);
    bloquearBoton(true, 'gray', 'black', boton2);
    bloquearBoton(true, 'gray', 'black', boton3);
    bloquearBoton(false, 'black', 'cadetblue', boton4);
    bloquearBoton(false, 'black', 'cadetblue', botonMin);
    bloquearBoton(false, 'black', 'cadetblue', botonMax); 
  }
  for (let j =  0; j < l - 1 - i; j++ ) {
    if ( arr[ j ] > arr[ j + 1 ] ) {
      [ arr[ j ], arr[ j + 1 ] ] = [ arr[ j + 1 ], arr[ j ] ];
        console.log(arr);
        
    }
  }
  setPilar(arr);
  returnLista = arr;
  intI++;
}

var bubbleSort = function(){

  bloquearBoton(true, 'gray', 'black', boton1);
  bloquearBoton(true, 'gray', 'black', boton2);
  bloquearBoton(true, 'gray', 'black', boton3);
  bloquearBoton(false, 'black', 'cadetblue', boton4);
  bloquearBoton(false, 'black', 'cadetblue', botonMin);
  bloquearBoton(false, 'black', 'cadetblue', botonMax);

  var arr = listaMov;
  const l = arr.length;
  for (let i = 0; i < l; i++ ) {
    for (let j = 0; j < l - 1 - i; j++ ) {
      if ( arr[ j ] > arr[ j + 1 ] ) {
        [ arr[ j ], arr[ j + 1 ] ] = [ arr[ j + 1 ], arr[ j ] ];
          console.log(arr);
      }
    }
  }
          setPilar(arr);
}

  var intI = 0;
  var intJ = 0;
  var lista = alertaNum();
  var listaMov;
  var listaInic;

  bloquearBoton(false, 'black', 'cadetblue', boton1);
  bloquearBoton(true, 'gray', 'black', boton2);
  bloquearBoton(true, 'gray', 'black', boton3);
  bloquearBoton(true, 'gray', 'black', boton4);
  bloquearBoton(true, 'gray', 'black', botonMin);
  bloquearBoton(true, 'gray', 'black', botonMax);
  bloquearBoton(false, 'black', 'cadetblue', botonConpuerta);

var verImagen = function(){
  console.log(listaInic);
  console.log(returnLista);
  bloquearBoton(true, 'gray', 'black', boton1);
  bloquearBoton(false, 'black', 'cadetblue', boton2);
  bloquearBoton(false, 'black', 'cadetblue', boton3);
  bloquearBoton(true, 'gray', 'black', boton4);
  bloquearBoton(false, 'black', 'cadetblue', botonMax);
  bloquearBoton(false, 'black', 'cadetblue', botonMin);

  setPilar(listaInic);
}

var pilar = function(val, altura, color, pilar, texto){
  texto.innerText = val;
  pilar.style.height = altura;
  pilar.style.backgroundColor = color;
}

var setPilar = function(arr){
  var color = "#";
  var int = 10477055;
  pilar(arr[0],  altura(arr[0]),  color+(int - arr[0]).toString(16),  document.getElementById("div1"),  document.getElementById("p1"));
  pilar(arr[1],  altura(arr[1]),  color+(int - arr[1]).toString(16),  document.getElementById("div2"),  document.getElementById("p2"));
  pilar(arr[2],  altura(arr[2]),  color+(int - arr[2]).toString(16),  document.getElementById("div3"),  document.getElementById("p3"));
  pilar(arr[3],  altura(arr[3]),  color+(int - arr[3]).toString(16),  document.getElementById("div4"),  document.getElementById("p4"));
  pilar(arr[4],  altura(arr[4]),  color+(int - arr[4]).toString(16),  document.getElementById("div5"),  document.getElementById("p5"));
  pilar(arr[5],  altura(arr[5]),  color+(int - arr[5]).toString(16),  document.getElementById("div6"),  document.getElementById("p6"));
  pilar(arr[6],  altura(arr[6]),  color+(int - arr[6]).toString(16),  document.getElementById("div7"),  document.getElementById("p7"));
  pilar(arr[7],  altura(arr[7]),  color+(int - arr[7]).toString(16),  document.getElementById("div8"),  document.getElementById("p8"));
  pilar(arr[8],  altura(arr[8]),  color+(int - arr[8]).toString(16),  document.getElementById("div9"),  document.getElementById("p9"));
  pilar(arr[9],  altura(arr[9]),  color+(int - arr[9]).toString(16),  document.getElementById("div10"), document.getElementById("p10"));
  pilar(arr[10], altura(arr[10]), color+(int - arr[10]).toString(16), document.getElementById("div11"), document.getElementById("p11"));
  pilar(arr[11], altura(arr[11]), color+(int - arr[11]).toString(16), document.getElementById("div12"), document.getElementById("p12"));
  pilar(arr[12], altura(arr[12]), color+(int - arr[12]).toString(16), document.getElementById("div13"), document.getElementById("p13"));
  pilar(arr[13], altura(arr[13]), color+(int - arr[13]).toString(16), document.getElementById("div14"), document.getElementById("p14"));
  pilar(arr[14], altura(arr[14]), color+(int - arr[14]).toString(16), document.getElementById("div15"), document.getElementById("p15"));
}

var getVal = function(valor){
  console.log(valor);
  return document.getElementById(valor).innerText;

}

var ponerValor = function(x, y, and, or){
  var suma = parseInt(x) + parseInt(y);
  var mult = parseInt(x) * parseInt(y);
  if(suma >= 1) { suma = 1; }
  document.getElementById(or).innerText = suma;
  document.getElementById(and).innerText = mult;
  
}

var ponerValorNot = function(x, not){
  var cambiar;
  if(x == 1) {cambiar = 0;}
  else if (x == 0) {cambiar = 1;}
  else {cambiar = "Error"}
  document.getElementById(not).innerText = cambiar;
}

var compuertaOperacion = function(){
  
  var x1 = getVal("xVal1");
  var x2 = getVal("xVal2");
  var x3 = getVal("xVal3");
  var x4 = getVal("xVal4");

  var y1 = getVal("yVal1");
  var y2 = getVal("yVal2");
  var y3 = getVal("yVal3");
  var y4 = getVal("yVal4");

  ponerValor(x1, y1, "op1And", "op1Or");
  ponerValor(x2, y2, "op2And", "op2Or");
  ponerValor(x3, y3, "op3And", "op3Or");
  ponerValor(x4, y4, "op4And", "op4Or");

}

var compuertaNot = function(){
  var x1 = getVal("xVal1NOT");
  ponerValorNot(x1 , "op1Not");
  var x2 = getVal("xVal2NOT");
  ponerValorNot(x2 , "op2Not");
  document.write("<div>hola</div>");
}