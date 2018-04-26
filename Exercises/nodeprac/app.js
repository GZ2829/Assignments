var readlineSync= require('readline-sync');

var upperCase= readlineSync.question("Choose a Word: ");

var answer = upperCase.toUpperCase();


console.log(answer)

var int = readlineSync.question("Choose another Word: ")

var ans2 = int.length;

console.log(ans2)


var cocat = readlineSync.question("Choose a Word: ")

var cocat2 = readlineSync.question("Choose another Word: ")

var ans3 = cocat.concat(cocat2)

console.log(ans3)

var wor = readlineSync.question("Give me a string with over 20 charachters: ")

    if(wor.length >= 20){
        var ans4 = wor.slice(wor.length/2, wor.length);
    }

console.log(ans4)    


var wor2 = readlineSync.question("Give me a starting point")

    while(ans4 !=0){
        

    }
