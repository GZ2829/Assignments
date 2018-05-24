var numarr=[1,2,3,4,5,6,7,8,9,10]

function sum(arr, num){
   for(i = 0; i<arr.length-2; i++){
       if(arr[i] + arr[i+1] == num || arr[i] + arr[i+2] == num){
           console.log([i, i+1] || [i, i+2])
       }
   } 
}

console.log(sum(numarr, 12))

// const twoSum = (arr, num) => {
//     let final = []
//     let total = arr.length * 2;
//     for(let i = 0; i < arr.length; i++){
//         for( let j = i; j < arr.length; j++){
//          if ((arr[i] + arr[j] === num && i !== j) && i + j < total) {
//              final = [i, j];
//            }
//         }
//     }
//     return final
//   }
  
//   console.log(twoSum([1,2,3], 4));
//   console.log(twoSum([7,4,18,4,3,1,21], 8))