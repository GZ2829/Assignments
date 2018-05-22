const inputArray = ["this", "is", "an", "array"];

function adjacent(arr){
    const newArr=arr.sort()
    return newArr

}


console.log(adjacent(inputArray))

// const inputArray = ["this", "is", "an", "array", "for", 'us'];

// const combined = (arr) => {
//   let total = 0;
//   for (let i = 0; i < arr.length - 2; i++){
//     let combinedLen = arr[i].length + arr[i+1].length + arr[i+2].length;
//     if(combinedLen > total){
//       total = combinedLen;
//       var newArray = [arr[i], arr[i+1], arr[i+2]]
//     }
//   }
//   return newArray
// }

// combined(inputArray)