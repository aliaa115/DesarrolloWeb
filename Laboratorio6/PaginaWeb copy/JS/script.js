
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

var alertaNum = function(){
    var randomArr = Array.from({length: 15}, () => Math.floor(Math.random() * 100));
    return randomArr;
}

var altura = function(dato) {
    var altura = dato.toString();
    altura = altura + "px";
    return altura 
}

var bubbleSort1s = function(int1, int2, arr){
    const l = arr.length;
    for (let int2 = 0; int2 < l; int2++ ) {
      for (let int1 = 0; int1 < l - 1 - int2; int1++ ) {
        if ( arr[ int1 ] > arr[ int1 + 1 ] ) {
          [ arr[ int1 ], arr[ int1 + 1 ] ] = [ arr[ int1 + 1 ], arr[ int1 ] ];
          console.log(arr.toString());
            document.write(arr, "<br><br>");
            
            valor1.innerText = arr[0].toString();
            pilar1.style.height = altura(arr[0]);
            valor2.innerText = arr[1].toString();
            pilar2.style.height = altura(arr[1]);
            valor3.innerText = arr[2].toString();
            pilar3.style.height = altura(arr[2]);
            valor4.innerText = arr[3].toString();
            pilar4.style.height = altura(arr[3]);
            valor5.innerTexst = arr[4].toString();
            pilar5.style.height = altura(arr[4]);
            valor6.innerText = arr[5].toString();
            pilar6.style.height = altura(arr[5]);
            valor7.innerText = arr[6].toString();
            pilar7.style.height = altura(arr[6]);
            valor8.innerText = arr[7].toString();
            pilar8.style.height = altura(arr[7]);
            valor9.innerText = arr[8].toString();
            pilar9.style.height = altura(arr[8]);
            valor10.innerText = arr[9].toString();
            pilar10.style.height = altura(arr[9]);
            valor11.innerText = arr[10].toString();
            pilar11.style.height = altura(arr[10]);
            valor12.innerText = arr[11].toString();
            pilar12.style.height = altura(arr[11]);
            valor13.innerText = arr[12].toString();
            pilar13.style.height = altura(arr[12]);
            valor14.innerText = arr[13].toString();
            pilar14.style.height = altura(arr[13]);
            valor15.innerText = arr[14].toString()}
            pilar15.style.height = altura(arr[14]);

            setTimeout(" ", 1000);
        }
      }
  
    return arr;
  }


var bubbleSort = function(int1, int2, arr){
    const l = arr.length;
    for (let i = 0; i < l; i++ ) {
      for (let j = 0; j < l - 1 - i; j++ ) {
        if ( arr[ j ] > arr[ j + 1 ] ) {
          [ arr[ j ], arr[ j + 1 ] ] = [ arr[ j + 1 ], arr[ j ] ];
          console.log(arr.toString());
            document.write(arr, "<br><br>");
            
            valor1.innerText = arr[0].toString();
            pilar1.style.height = altura(arr[0]);
            valor2.innerText = arr[1].toString();
            pilar2.style.height = altura(arr[1]);
            valor3.innerText = arr[2].toString();
            pilar3.style.height = altura(arr[2]);
            valor4.innerText = arr[3].toString();
            pilar4.style.height = altura(arr[3]);
            valor5.innerText = arr[4].toString();
            pilar5.style.height = altura(arr[4]);
            valor6.innerText = arr[5].toString();
            pilar6.style.height = altura(arr[5]);
            valor7.innerText = arr[6].toString();
            pilar7.style.height = altura(arr[6]);
            valor8.innerText = arr[7].toString();
            pilar8.style.height = altura(arr[7]);
            valor9.innerText = arr[8].toString();
            pilar9.style.height = altura(arr[8]);
            valor10.innerText = arr[9].toString();
            pilar10.style.height = altura(arr[9]);
            valor11.innerText = arr[10].toString();
            pilar11.style.height = altura(arr[10]);
            valor12.innerText = arr[11].toString();
            pilar12.style.height = altura(arr[11]);
            valor13.innerText = arr[12].toString();
            pilar13.style.height = altura(arr[12]);
            valor14.innerText = arr[13].toString();
            pilar14.style.height = altura(arr[13]);
            valor15.innerText = arr[14].toString()}
            pilar15.style.height = altura(arr[14]);

            setTimeout(" ", 1000);
        }
      }
  
    return arr;
  }

  var lista = alertaNum();

  var result = bubbleSort(0, 1, lista);

  
  result;


  function myTimer(arr) {
  }