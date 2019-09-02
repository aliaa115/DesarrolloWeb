
var aleatNum = function(){
    var randomArr = Array.from({length: 15}, () => Math.floor(Math.random() * 100));
    return randomArr;
}

const bubbleSort = arr => {
    const l = arr.length;
    for (let i = 0; i < l; i++ ) {
      for (let j = 0; j < l - 1 - i; j++ ) {
        if ( arr[ j ] > arr[ j + 1 ] ) {
          [ arr[ j ], arr[ j + 1 ] ] = [ arr[ j + 1 ], arr[ j ] ];
          document.write(arr, "<br><br>");
        }
      }
    }
  
    return arr;
  };
  
  const result = bubbleSort(aleatNum());

  result;