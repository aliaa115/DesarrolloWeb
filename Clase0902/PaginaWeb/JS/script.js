
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

var alertaNum = function(){
    var randomArr = Array.from({length: 15}, () => Math.floor(Math.random() * 100));
    return randomArr;
}

const bubbleSort1 = arr =>{
  
  const l = arr.length;
  var i = 0, j = 0;
  
  setTimeout(
    function func() {
        if(i<l && i!=l){
          if(j<(l-1-i)){
              if ( arr[ j ] > arr[ j + 1 ] ) {
              [ arr[ j ], arr[ j + 1 ] ] = [ arr[ j + 1 ], arr[ j ] ];
              console.log(arr.toString());
              document.write(arr, "<br><br>");
              valor1.innerText = arr[0].toString();
              valor2.innerText = arr[1].toString();
              valor3.innerText = arr[2].toString();
              valor4.innerText = arr[3].toString();
              valor5.innerText = arr[4].toString();
              valor6.innerText = arr[5].toString();
              valor7.innerText = arr[6].toString();
              valor8.innerText = arr[7].toString();
              valor9.innerText = arr[8].toString();
              valor10.innerText = arr[9].toString();
              valor11.innerText = arr[10].toString();
              valor12.innerText = arr[11].toString();
              valor13.innerText = arr[12].toString();
              valor14.innerText = arr[13].toString();
              valor15.innerText = arr[14].toString();
            }
            j++;
          }
          i++;
        }
      },
    10);

  return arr;
}

const bubbleSort = arr => {
    const l = arr.length;
    for (let i = 0; i < l; i++ ) {
      for (let j = 0; j < l - 1 - i; j++ ) {
        if ( arr[ j ] > arr[ j + 1 ] ) {
          [ arr[ j ], arr[ j + 1 ] ] = [ arr[ j + 1 ], arr[ j ] ];
          console.log(arr.toString());
            document.write(arr, "<br><br>");
              valor1.innerText = arr[0].toString();
            valor2.innerText = arr[1].toString();
            valor3.innerText = arr[2].toString();
            valor4.innerText = arr[3].toString();
            valor5.innerText = arr[4].toString();
            valor6.innerText = arr[5].toString();
            valor7.innerText = arr[6].toString();
            valor8.innerText = arr[7].toString();
            valor9.innerText = arr[8].toString();
            valor10.innerText = arr[9].toString();
            valor11.innerText = arr[10].toString();
            valor12.innerText = arr[11].toString();
            valor13.innerText = arr[12].toString();
            valor14.innerText = arr[13].toString();
            valor15.innerText = arr[14].toString()}
            setTimeout(" ", 1000);
        }
      }
  
    return arr;
  }

  var lista = alertaNum();

  const result = bubbleSort1(lista);

  
  result;


  function myTimer(arr) {
  }