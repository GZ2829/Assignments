function add(num1, num2){
    var sum= num1 + num2
    return sum
}

console.log(add(3, 7));

function greater(nu1, nu2, nu3){
    return(Math.max(nu1, nu2, nu3))   
}

console.log(greater(7,5,12))

function evenOrOdd(num1){
    if (num1%2 === 0 )
        return true;
    else
        return false    

} 

console.log("Is this number even? " + evenOrOdd(9))

function strings(str){
    if (str.length >= 19)
        return(str.slice(0, str.length/2))
    else
        return(str + " " + str)
}

console.log(strings("Hello my name is harry peterson and this is a test"))        
console.log(strings("Hello ")) 

var fibbs = [1,1,2,3,5,8,13,21,34]


function fib(n)