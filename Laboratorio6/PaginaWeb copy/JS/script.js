
var boton1 = document.getElementById("Iniciar");
var boton2 = document.getElementById("Sig");
var boton3 = document.getElementById("Ult");
var boton4 = document.getElementById("Recargar");

var valor1 = document.getElementById("p1");
var valor2 = document.getElementById("p2");
var valor3 = document.getElementById("p3");
var valor4 = document.getElementById("p4");
var valor5 = document.getElementById("p5");
var valor6 = document.getElementById("p6");
var valor7 = document.getElementById("p7");
var valor8 = document.getElementById("p8");
var valor9 = document.getElementById("p9");
var valor10 = document.getElementById("p10");
var valor11 = document.getElementById("p11");
var valor12 = document.getElementById("p12");
var valor13 = document.getElementById("p13");
var valor14 = document.getElementById("p14");
var valor15 = document.getElementById("p15");

var pilar1 = document.getElementById("div1");
var pilar2 = document.getElementById("div2");
var pilar3 = document.getElementById("div3");
var pilar4 = document.getElementById("div4");
var pilar5 = document.getElementById("div5");
var pilar6 = document.getElementById("div6");
var pilar7 = document.getElementById("div7");
var pilar8 = document.getElementById("div8");
var pilar9 = document.getElementById("div9");
var pilar10 = document.getElementById("div10");
var pilar11 = document.getElementById("div11");
var pilar12 = document.getElementById("div12");
var pilar13 = document.getElementById("div13");
var pilar14 = document.getElementById("div14");
var pilar15 = document.getElementById("div15");

var proceso = document.getElementById("proceso");



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
    boton2.disabled = true;
    boton2.style.backgroundColor = 'gray';
    boton2.style.color = 'black';

    boton3.disabled = true;
    boton3.style.backgroundColor = 'gray';
    boton3.style.color = 'black';

    boton4.disabled = false;
    boton4.style.backgroundColor = 'black';
    boton4.style.color = 'cadetblue';

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

  boton2.disabled = false;
  boton2.style.backgroundColor = "gray";
  boton2.style.color = 'black';

  boton3.disabled = false;
  boton3.style.backgroundColor = 'gray';
  boton3.style.color = 'black';

  boton4.disabled = false;
  boton4.style.backgroundColor = 'black';
  boton4.style.color = 'cadetblue';

  var arr = listaMov;
  const l = arr.length;
  for (let i = 0; i < l; i++ ) {
    for (let j = 0; j < l - 1 - i; j++ ) {
      if ( arr[ j ] > arr[ j + 1 ] ) {
        [ arr[ j ], arr[ j + 1 ] ] = [ arr[ j + 1 ], arr[ j ] ];
          console.log(arr);
          

          setTimeout(" ", 1000);
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
  
  boton2.disabled = true;
  boton2.style.backgroundColor = 'gray';
  boton2.style.color = 'black';

  boton3.disabled = true;
  boton3.style.backgroundColor = 'gray';
  boton3.style.color = 'black';

  boton4.disabled = true;
  boton4.style.backgroundColor = 'gray';
  boton4.style.color = 'black';


var verImagen = function(){
  console.log(listaInic);
  console.log(returnLista);
  boton1.disabled = true;
  boton1.style.backgroundColor = 'gray';
  boton1.style.color = 'black';

  boton2.disabled = false;
  boton2.style.backgroundColor = 'black';
  boton2.style.color = 'cadetblue';

  boton3.disabled = false;
  boton3.style.backgroundColor = 'black';
  boton3.style.color = 'cadetblue';


  setPilar(listaInic);
}



var recargar = function() {
    location.reload();
}



var setPilar = function(arr){

  var color = "#";
  var int = 10477055;
  valor1.innerText = arr[0];
  pilar1.style.height = altura(arr[0]);
  pilar1.style.backgroundColor = color+(int - arr[0]).toString(16);
  valor2.innerText = arr[1];
  pilar2.style.height = altura(arr[1]);
  pilar2.style.backgroundColor = color + (int - arr[1]).toString(16);
  valor3.innerText = arr[2];
  pilar3.style.height = altura(arr[2]);
  pilar3.style.backgroundColor = color + (int - arr[2]).toString(16);
  valor4.innerText = arr[3];
  pilar4.style.height = altura(arr[3]);
  pilar4.style.backgroundColor = color + (int - arr[3]).toString(16);
  valor5.innerText = arr[4];
  pilar5.style.height = altura(arr[4]);
  pilar5.style.backgroundColor = color + (int - arr[4]).toString(16);
  valor6.innerText = arr[5];
  pilar6.style.height = altura(arr[5]);
  pilar6.style.backgroundColor = color + (int - arr[5]).toString(16);
  valor7.innerText = arr[6];
  pilar7.style.height = altura(arr[6]);
  pilar7.style.backgroundColor = color + (int - arr[6]).toString(16);
  valor8.innerText = arr[7];
  pilar8.style.height = altura(arr[7]);
  pilar8.style.backgroundColor = color + (int - arr[7]).toString(16);
  valor9.innerText = arr[8];
  pilar9.style.height = altura(arr[8]);
  pilar9.style.backgroundColor = color + (int - arr[8]).toString(16);
  valor10.innerText = arr[9];
  pilar10.style.height = altura(arr[9]);
  pilar10.style.backgroundColor = color + (int - arr[9]).toString(16);
  valor11.innerText = arr[10];
  pilar11.style.height = altura(arr[10]);
  pilar11.style.backgroundColor = color + (int - arr[10]).toString(16);
  valor12.innerText = arr[11];
  pilar12.style.height = altura(arr[11]);
  pilar12.style.backgroundColor = color + (int - arr[11]).toString(16);
  valor13.innerText = arr[12];
  pilar13.style.height = altura(arr[12]);
  pilar13.style.backgroundColor = color + (int - arr[12]).toString(16);
  valor14.innerText = arr[13];
  pilar14.style.height = altura(arr[13]);
  pilar14.style.backgroundColor = color + (int - arr[13]).toString(16);
  valor15.innerText = arr[14];
  pilar15.style.height = altura(arr[14]);
  pilar15.style.backgroundColor = color + (int - arr[14]).toString(16);
}