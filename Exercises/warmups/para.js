
function para(str){
    if(str.includes('(') && str.includes(')')){
        return true
    } else{
        return false
    }
}



console.log(para("()))"))




// "()()" // -> true
// "(())" // -> true
// "()))" // -> false