//Create a function that takes a string and returns a string in which each character is repeated once.


function doubleChar(str) {
   return str.split("")
   .map(function(char){
      return char + char                  
   }).join("")
}   



console.log(doubleChar("String")) //➞ "SSttrriinngg"
console.log(doubleChar("Hello World!")) //➞ "HHeelllloo  WWoorrlldd!!"
console.log(doubleChar("1234!_ ")) //➞ "11223344!!__  "

// var newStr = ""
// for(var i = 0; i<str.length; i++){
//     //repeat each letter that for loop loops through
//     newStr += str[i] + str[i]
// } return newStr