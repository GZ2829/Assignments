
var arr = [];
var large= 0;
var arr2 =[];
var arr3=[];

// function largest(arr){
//     for(i = 0; i < arr.length; i++){
//         if(arr[i] > large){
//          large=arr[i];
//         }
//     }
//     return large
// } 




// console.log(largest([1,743,19,546]))


// function isDivisible(num1,num2){
//     if(num1 % num2 === 0){
//         return(true)
// }    else{
//         return(false)
// }}

//     console.log(isDivisible(5,2))


function lettersWithStrings(arr2, char){
    for(i = 0; i < arr2.length; i++){
        if(arr2[i].match(char)){
            arr3.push(arr2[i])
        }      
    }   
    return(arr3)
    
}

    console.log(lettersWithStrings(["##","#$%^","he"], "#"))