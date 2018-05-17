const multiD1 = [[1,2,3],["a","b","c"],[true, true, true]]

const multiD2 = [[true,false,true],[false,false,true]]





// function checkTypes(arr) {
//     for(var i = 0; i<arr.length; i++){
//         for(var j = 0; j<arr[i].length; j++){
//             if(typeof(arr[i][j]) === typeof arr[i][j])
//                 return true
//             else{
//                 return false
//         }
//         }
//     }  
// }

function checkTypes(arr) {
    return arr.every((array, i, parentArr) =>
        typeof array[i] === typeof parentArr[parentArr.length - 1][i] &&
        array.every((elem, i, childArr) => typeof elem === typeof childArr[childArr.length - 1])
    );
}

console.log(checkTypes(multiD1))