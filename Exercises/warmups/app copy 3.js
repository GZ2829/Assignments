// Write a function the generates a 10 X 10 multiplication table (2D array).

function multTable(){
    var table = [];
    for(var i = 0; i < 10; i++){
      table[i] = []
      for(var j = 0; j < 10; j++){
        table[i][j] = (i + 1) * (j + 1)
      }
    }
    return table;
  }
  
  
  console.log(multTable())